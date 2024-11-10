class EasyLocalStorage {
    static setItem(key, value) {
      try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
      } catch (error) {
        console.error('Error setting item in localStorage', error);
      }
    }
  
    static getItem(key) {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      } catch (error) {
        console.error('Error getting item from localStorage', error);
        return null;
      }
    }
  
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing item from localStorage', error);
      }
    }
  
    static clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage', error);
      }
    }
  
    static hasItem(key) {
      return localStorage.getItem(key) !== null;
    }
  }
  
  module.exports = EasyLocalStorage;
  