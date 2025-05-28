export const getQueryParam = (key: string) => new URLSearchParams(window.location.search).get(key);

export const getCampaign = () => getQueryParam('campaign_id');
export const getSource = () => getQueryParam('source');

/**
 * App language. Defaults to english.
 */
export const getLanguage = () => getQueryParam('cr_lang') || 'english';

/**
 * Determined user id from the CR container app.
 */
export const getUserId = () => getQueryParam('cr_user_id');