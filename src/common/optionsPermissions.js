import optionsPrototype from './optionsPrototype.json5';
import {getOptions} from './optionsUtils.js';
import actionApi from './actionApi.js';

// Required permissions, including host permissions.
//
// IMPORTANT: This should be kept in sync with the "permissions" key in
// //templates/manifest.gjson.
const requiredPermissions = new Set([
  'storage',
  'alarms',
// #!if ['chromium', 'chromium_mv3'].includes(browser_target)
  'declarativeNetRequestWithHostAccess',
// #!endif
]);

// Returns an array of optional permissions needed by |feature|.
export function requiredOptPermissions(feature) {
  if (!(feature in optionsPrototype)) {
    console.error('"' + feature + '" feature doesn\'t exist.');
    return [];
  }

  return optionsPrototype[feature]?.requiredOptPermissions ?? [];
}

// Returns a promise resolving to an array of optional permissions needed by all
// the current enabled features.
export function currentRequiredOptPermissions() {
  return getOptions(null, /* requireOptionalPermissions = */ false)
      .then(options => {
        let permissions = [];

        // For each option
        for (const [opt, optMeta] of Object.entries(optionsPrototype))
          // If the option is enabled
          if (options[opt])
            // Add its required optional permissions to the list
            permissions.push(...(optMeta.requiredOptPermissions ?? []));

        return permissions;
      });
}

// Ensures that all the optional permissions required by |feature| are granted,
// and requests them otherwise. It returns a promise which resolves specifying
// whether the permissions were granted or not.
export function ensureOptPermissions(feature) {
  return new Promise((resolve, reject) => {
    let permissions = requiredOptPermissions(feature);

    chrome.permissions.contains({permissions}, isAlreadyGranted => {
      if (isAlreadyGranted) return resolve(true);

      chrome.permissions.request({permissions}, granted => {
        // If there was an error, reject the promise.
        if (granted === undefined)
          return reject(new Error(
              chrome.runtime.lastError.message ??
              'An unknown error occurred while requesting the permisisons'));

        // If the permission is granted we should maybe remove the warning
        // badge.
        if (granted) cleanUpOptPermissions(/* removeLeftoverPerms = */ false);

        return resolve(granted);
      });
    });
  });
}

// Returns a promise resolving to the list of currently granted optional
// permissions (i.e. excluding required permissions).
export function grantedOptPermissions() {
  return new Promise((resolve, reject) => {
    chrome.permissions.getAll(response => {
      if (response === undefined)
        return reject(new Error(
            chrome.runtime.lastError.message ??
            'An unknown error occurred while calling chrome.permissions.getAll()'));

      let optPermissions =
          response.permissions.filter(p => !requiredPermissions.has(p));
      resolve(optPermissions);
    });
  });
}

// Returns a promise resolving to an object with 2 properties:
//   - missingPermissions: an array of optional permissions which are required
//     by enabled features and haven't been granted yet.
//   - leftoverPermissions: an array of optional permissions which are granted
//     but are no longer needed.
export function diffPermissions() {
  return Promise
      .all([
        grantedOptPermissions(),
        currentRequiredOptPermissions(),
      ])
      .then(perms => {
        return {
          missingPermissions: perms[1].filter(p => !perms[0].includes(p)),
          leftoverPermissions: perms[0].filter(p => !perms[1].includes(p)),
        };
      })
      .catch(cause => {
        throw new Error(
            'Couldn\'t compute the missing and leftover permissions.', {cause});
      });
}

// Returns a promise which resolves to the array of required optional
// permissions of |feature| which are missing.
//
// Accepts an argument |grantedPermissions| with the array of granted
// permissions, otherwise the function will call grantedOptPermissions() to
// retrieve them. This can be used to prevent calling
// chrome.permissions.getAll() repeteadly.
export function missingPermissions(feature, grantedPermissions = null) {
  let grantedOptPermissionsPromise;
  if (grantedPermissions !== null)
    grantedOptPermissionsPromise = new Promise((res, rej) => {
      res(grantedPermissions);
    });
  else
    grantedOptPermissionsPromise = grantedOptPermissions();

  return Promise
      .all([
        grantedOptPermissionsPromise,
        requiredOptPermissions(feature),
      ])
      .then(perms => {
        return perms[1].filter(p => !perms[0].includes(p));
      })
      .catch(cause => {
        throw new Error(
            'Couldn\'t compute the missing permissions for "' + feature + '",',
            {cause});
      });
}

// Deletes optional permissions which are no longer needed by the current
// set of enabled features (if |removeLeftoverPerms| is set to true), and sets a
// badge if some needed permissions are missing.
export function cleanUpOptPermissions(removeLeftoverPerms = true) {
  return diffPermissions()
      .then(perms => {
        let {missingPermissions, leftoverPermissions} = perms;

        if (missingPermissions.length > 0) {
          actionApi.setBadgeBackgroundColor({color: '#B71C1C'});
          actionApi.setBadgeText({text: '!'});
          // This is to work around https://crbug.com/1268098.
          // TODO(avm99963): Remove when the bug is fixed.
          // #!if browser_target !== 'chromium_mv3'
          actionApi.setTitle({
            title: chrome.i18n.getMessage('actionbadge_permissions_requested')
          });
          // #!endif
        } else {
          actionApi.setBadgeText({text: ''});
          actionApi.setTitle({title: ''});
        }

        if (removeLeftoverPerms) {
          chrome.permissions.remove({
            permissions: leftoverPermissions,
          });
        }
      })
      .catch(err => {
        console.error(
            'An error ocurred while cleaning optional permissions: ', err);
      });
}