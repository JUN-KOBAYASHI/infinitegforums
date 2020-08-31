var CCProfileRegex =
    /^(?:https:\/\/support\.google\.com)?\/s\/community\/forum\/[0-9]*\/user\/(?:[0-9]+)$/;
var CCRegex = /^https:\/\/support\.google\.com\/s\/community/;

const OP_FIRST_POST = 0;
const OP_OTHER_POSTS_READ = 1;
const OP_OTHER_POSTS_UNREAD = 2;

const OPClasses = {
  0: 'profile-indicator--first-post',
  1: 'profile-indicator--other-posts-read',
  2: 'profile-indicator--other-posts-unread',
};

const OPi18n = {
  0: 'first_post',
  1: 'other_posts_read',
  2: 'other_posts_unread',
};

// Filter used as a workaround to speed up the ViewForum request.
const FILTER_ALL_LANGUAGES =
    'lang:(ar | bg | ca | "zh-hk" | "zh-cn" | "zh-tw" | hr | cs | da | nl | en | "en-au" | "en-gb" | et | fil | fi | fr | de | el | iw | hi | hu | id | it | ja | ko | lv | lt | ms | no | pl | "pt-br" | "pt-pt" | ro | ru | sr | sk | sl | es | "es-419" | sv | th | tr | uk | vi)';

function isElementInside(element, outerTag) {
  while (element !== null && ('tagName' in element)) {
    if (element.tagName == outerTag) return true;
    element = element.parentNode;
  }

  return false;
}

function escapeUsername(username) {
  var quoteRegex = /"/g;
  var commentRegex = /<!---->/g;
  return username.replace(quoteRegex, '\\"').replace(commentRegex, '');
}

function getPosts(query, forumId) {
  return fetch('https://support.google.com/s/community/api/ViewForum', {
           'credentials': 'include',
           'headers': {'content-type': 'text/plain; charset=utf-8'},
           'body': JSON.stringify({
             '1': forumId,
             '2': {
               '1': {
                 '2': 5,
               },
               '2': {
                 '1': 1,
                 '2': true,
               },
               '12': query,
             },
           }),
           'method': 'POST',
           'mode': 'cors',
         })
      .then(res => res.json());
}

// Source:
// https://stackoverflow.com/questions/33063774/communication-from-an-injected-script-to-the-content-script-with-a-response
var i18nRequest = (function() {
  var requestId = 0;

  function getMessage(msg) {
    var id = requestId++;

    return new Promise(function(resolve, reject) {
      var listener = function(evt) {
        if (evt.detail.requestId == id) {
          // Deregister self
          window.removeEventListener('sendChromeData', listener);
          resolve(evt.detail.string);
        }
      };

      window.addEventListener('sendi18nString', listener);

      var payload = {msg: msg, id: id};

      window.dispatchEvent(new CustomEvent('geti18nString', {detail: payload}));
    });
  }

  return {getMessage: getMessage};
})();

// Create profile indicator dot with a loading state
function createIndicatorDot(sourceNode, searchURL) {
  var dotContainer = document.createElement('span');
  dotContainer.classList.add('profile-indicator');
  dotContainer.classList.add('profile-indicator--loading');
  i18nRequest.getMessage('inject_profileindicator_loading')
      .then(string => dotContainer.setAttribute('title', string));

  var dotLink = document.createElement('a');
  dotLink.href = searchURL;
  dotLink.innerText = '●';

  dotContainer.appendChild(dotLink);
  sourceNode.parentNode.appendChild(dotContainer);

  return dotContainer;
}

// Handle the profile indicator
function handleIndicatorDot(sourceNode, isCC) {
  var escapedUsername = escapeUsername(
      (isCC ? sourceNode.innerHTML :
              sourceNode.querySelector('span').innerHTML));

  if (isCC) {
    var threadLink = document.location.href;
  } else {
    var CCLink = document.getElementById('onebar-community-console');
    if (CCLink === null) {
      console.error(
          '[dotindicator] The user is not a PE so the dot indicator cannot be shown in TW.');
      return;
    }
    var threadLink = CCLink.href;
  }

  var forumUrlSplit = threadLink.split('/forum/');
  if (forumUrlSplit.length < 2) {
    console.error('[dotindicator] Can\'t get forum id.');
    return;
  }

  var forumId = forumUrlSplit[1].split('/')[0];
  var query = '(replier:"' + escapedUsername + '" | creator:"' +
      escapedUsername + '") ' + FILTER_ALL_LANGUAGES;
  var encodedQuery =
      encodeURIComponent(query + (isCC ? ' forum:' + forumId : ''));
  var searchURL =
      (isCC ? 'https://support.google.com/s/community/search/' +
               encodeURIComponent('query=' + encodedQuery) :
              document.location.pathname.split('/thread')[0] +
               '/threads?thread_filter=' + encodedQuery)

  var dotContainer = createIndicatorDot(sourceNode, searchURL);

  // Query threads in order to see what state the indicator should be in
  getPosts(query, forumId)
      .then(res => {
        if (!('1' in res) || !('2' in res['1'])) {
          throw new Error('Unexpected response.');
          return;
        }

        // Current thread ID
        var threadUrlSplit = threadLink.split('/thread/');
        if (threadUrlSplit.length < 2) throw new Error('Can\'t get thread id.');

        var currId = threadUrlSplit[1].split('/')[0];

        var OPStatus = OP_FIRST_POST;

        for (const thread of res['1']['2']) {
          var id = thread['2']['1']['1'] || undefined;
          if (id === undefined || id == currId) continue;

          var isRead = thread['6'] || false;
          if (isRead)
            OPStatus = Math.max(OP_OTHER_POSTS_READ, OPStatus);
          else
            OPStatus = Math.max(OP_OTHER_POSTS_UNREAD, OPStatus);
        }

        dotContainer.classList.remove('profile-indicator--loading');
        dotContainer.classList.add(OPClasses[OPStatus]);
        i18nRequest.getMessage('inject_profileindicator_' + OPi18n[OPStatus])
            .then(string => dotContainer.setAttribute('title', string));
      })
      .catch(
          err => console.error(
              '[dotindicator] Unexpected error. Couldn\'t load recent posts.',
              err));
}

if (CCRegex.test(location.href)) {
  // We are in the Community Console
  function mutationCallback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      if (mutation.type == 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.tagName == 'A' && ('href' in node) &&
              CCProfileRegex.test(node.href) &&
              isElementInside(node, 'EC-QUESTION') && ('children' in node) &&
              node.children.length == 0) {
            handleIndicatorDot(node, true);
          }
        });
      }
    });
  };

  var observerOptions = {
    childList: true,
    subtree: true,
  }

  mutationObserver = new MutationObserver(mutationCallback);
  mutationObserver.observe(
      document.querySelector('.scrollable-content'), observerOptions);
} else {
  // We are in TW
  var node = document.querySelector('.thread-question .user-info-display-name');
  if (node !== null)
    handleIndicatorDot(node, false);
  else
    console.error('[dotindicator] Couldn\'t find username.');
}