export abstract class AbstractStorage {
  abstract clear(): void;

  abstract get(key: string): any;

  abstract remove(key: string): void;

  abstract isSet(key: string): boolean;

  abstract set(key: string, value: any): void;
}