import { LocalStorageCache } from './local-storage';

const storagePrototype = global.Storage.prototype;

describe('LocalStorageCache', () => {
  const cache = new LocalStorageCache();

  beforeEach(() => {
    cache.clear();
  });

  describe('Default', () => {
    describe('When setting a cache item', () => {
      it('should call localStorage.setItem', () => {
        const spy = jest.spyOn(storagePrototype, 'setItem');
        cache.set('test', 'test');
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
