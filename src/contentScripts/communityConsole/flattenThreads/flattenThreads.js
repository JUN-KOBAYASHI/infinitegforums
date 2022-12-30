export const kAdditionalInfoPrefix = '__TWPT_FLATTENTHREADS_ADDITIONALINFO__';
export const kAdditionalInfoRegex =
    /^__TWPT_FLATTENTHREADS_ADDITIONALINFO__(.*)/;

export const kReplyPayloadSelector =
    '.scTailwindThreadMessageMessagecardcontent:not(.scTailwindThreadMessageMessagecardpromoted) .scTailwindThreadPostcontentroot html-blob';

export default class FlattenThreads {
  construct() {}

  getExtraInfo(node) {
    let rawExtraInfo = null;
    const possibleExtraInfoNodes =
        node.querySelectorAll('span[style*=\'display\'][style*=\'none\']');
    for (const candidate of possibleExtraInfoNodes) {
      const content = candidate.textContent;
      const matches = content.match(kAdditionalInfoRegex);
      if (matches) {
        rawExtraInfo = matches?.[1] ?? null;
        break;
      }
    }
    if (!rawExtraInfo) return null;
    return JSON.parse(rawExtraInfo);
  }

  injectId(node, extraInfo) {
    const root = node.closest('.scTailwindThreadMessageMessagecardcontent');
    if (!root) return false;
    root.setAttribute('data-twpt-message-id', extraInfo.id);
    return true;
  }

  injectQuote(node, extraInfo) {
    const content = node.closest('.scTailwindThreadPostcontentroot');
    // @TODO: Change this by the actual quote component
    const quote = document.createElement('div');
    quote.textContent = 'QUOTE(' + extraInfo.parentMessage.id + ')';
    content.prepend(quote);
  }

  injectIfApplicable(node) {
    // If we injected the additional information, it means the flatten threads
    // feature is enabled and in actual use, so we should inject the quote.
    const extraInfo = this.getExtraInfo(node);
    if (!extraInfo) return;

    this.injectId(node, extraInfo);
    if (extraInfo.isComment) this.injectQuote(node, extraInfo);
  }

  shouldInject(node) {
    return node.matches(kReplyPayloadSelector);
  }
}
