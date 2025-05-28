import { AbstractStorage } from '../abstract-storage';

/**
 * A local storage wrapper that adds namespaces and data serialization.
 */
export class LocalStorageCache implements AbstractStorage {
  constructor(protected namespace = 'storage') {}
  
  clear() {
    localStorage.removeItem(this.namespace)
  }

  get(key: string) {
    return this.getStorage()[key];
  }

  remove(key: string) {
    const data = this.getStorage();
    data[key] = undefined;
    delete data[key];
    this.save(data);
  }

  isSet(key: string) {
    return this.getStorage()[key] !== undefined;
  }

  set(key: string, value: any) {
    const data = this.getStorage();
    data[key] = value;
    this.save(data);
  }

  private getStorage() {
    const storage = localStorage.getItem(this.namespace);
    if (storage) return this.deserialize(storage);
    return {};
  }

  private serialize(value: any) {
    return JSON.stringify(value);
  }

  private deserialize(value: any) {
    return JSON.parse(value);
  }

  private save(data: any) {
    localStorage.setItem(this.namespace, this.serialize(data));
  }
}
