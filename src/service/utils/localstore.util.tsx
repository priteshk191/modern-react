const localStorageUtils = {
  get<T>(key: string): T | undefined {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return undefined;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error(`Error getting item from localStorage: ${error}`);
      return undefined;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting item in localStorage: ${error}`);
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage: ${error}`);
    }
  },

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage: ${error}`);
    }
  },
};

export default localStorageUtils;

// // Set an item in localStorage
// localStorageUtils.set('myKey', { foo: 'bar' });

// // Get an item from localStorage
// const value = localStorageUtils.get('myKey');

// // Remove an item from localStorage
// localStorageUtils.remove('myKey');

// // Clear all items from localStorage
// localStorageUtils.clear();
