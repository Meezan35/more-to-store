const CryptoJS = require('crypto-js');

class MoreToStore {
  static setItem(key, value, secretKey = '') {
    try {
      let data = JSON.stringify(value);
      if (secretKey) {
        data = CryptoJS.AES.encrypt(data, secretKey).toString();
      }
      localStorage.setItem(key, data);
    } catch (error) {
      console.error('Error setting item in localStorage', error);
    }
  }

  static getItem(key, secretKey = '') {
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;
      if (secretKey) {
        const bytes = CryptoJS.AES.decrypt(data, secretKey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return JSON.parse(data);
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

module.exports = MoreToStore;
