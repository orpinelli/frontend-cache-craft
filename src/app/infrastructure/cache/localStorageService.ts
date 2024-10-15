export class LocalStorageService {
    static setItem<T>(key: string, value: T): void {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  

    static getItem<T>(key: string): T | null {
      if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          return JSON.parse(storedValue) as T;
        }
      }
      return null;
    }
  
    static removeItem(key: string): void {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    }

    static clear(): void {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    }
  }
  