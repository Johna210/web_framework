export class Attributes<T extends Object> {
  constructor(private data: T) {}

  // <K extends keyof T> - K can only ever be one of the different
  // keys of T
  // T[K] - take the type T and lookup the type K inside of it
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
