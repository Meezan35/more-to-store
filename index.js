const CryptoJS = require('crypto-js');

class MoreToStore {
  static setItem(key, value, secretKey = '', expiryInMs = null) {
    try {
      let data = {
        value: value,
        expiry: expiryInMs ? Date.now() + expiryInMs : null
      };

      let stringifiedData = JSON.stringify(data);

      if (secretKey) {
        stringifiedData = CryptoJS.AES.encrypt(stringifiedData, secretKey).toString();
      }

      localStorage.setItem(key, stringifiedData);


      if (expiryInMs) {
        setTimeout(() => {
          if (localStorage.getItem(key)) {
            const storedData = JSON.parse(localStorage.getItem(key));
            if (storedData.expiry && Date.now() > storedData.expiry) {
              localStorage.removeItem(key);
            }
          }
        }, expiryInMs);
      }
    } catch (error) {
      console.error('Error setting item in localStorage', error);
    }
  }

  static getItem(key, secretKey = '') {
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;

      let parsedData;

      if (secretKey) {
        const bytes = CryptoJS.AES.decrypt(data, secretKey);
        parsedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } else {
        parsedData = JSON.parse(data);
      }

      if (parsedData.expiry && Date.now() > parsedData.expiry) {
        
        localStorage.removeItem(key);
        return null;
      }

      return parsedData.value;
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
