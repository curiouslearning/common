import { getCampaign, getSource, getLanguage, getUserId, getQueryParam } from './query-params';

Object.defineProperty(window, 'location', {
  value: new URL('http://www.mock.com?campaign_id=mock-campaign-id&source=mock-source&cr_lang=mock-lang&cr_user_id=mock-user-id'),
  configurable: true,
});

describe('QueryParams', () => {
  describe('Default', () => {
    [
      {
        key: 'campaign_id',
        value: 'mock-campaign-id'
      },
      {
        key: 'source',
        value: 'mock-source'
      },
      {
        key: 'cr_lang',
        value: 'mock-lang'
      },
      {
        key: 'cr_user_id',
        value: 'mock-user-id'
      }
    ].forEach(({ key, value }) => {
      describe(`When getting ${key} with getQueryParam()`, () => {
        it(`should result to mock ${value}`, () => {
          expect(getQueryParam(key)).toBe(value);
        });
      });
    });
    
    [
      {
        key: 'getCampaign',
        fn: getCampaign,
        expected: 'mock-campaign-id'
      },
      {
        key: 'getSource',
        fn: getSource,
        expected: 'mock-source'
      },
      {
        key: 'getLanguage',
        fn: getLanguage,
        expected: 'mock-lang'
      },
      {
        key: 'getUserId',
        fn: getUserId,
        expected: 'mock-user-id'
      }
    ].forEach(({ key, fn, expected }) => {
      describe(`When using helper constant ${key}`, () => {
        it(`should be ${expected}`, () => {
          expect(fn()).toBe(expected);
        });
      });
    });
  });
});
