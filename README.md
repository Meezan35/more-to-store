# More to Store

`More to Store` is a lightweight and efficient utility library for managing `localStorage` with added features like optional encryption and expiration. It simplifies storing, retrieving, and managing data in `localStorage` while ensuring secure and optimized workflows for developers.

---

## Features

- **Easy-to-use API**: Simplifies interactions with `localStorage`.
- **Optional Encryption**: Secure sensitive data using AES encryption.
- **Automatic Expiration**: Automatically removes expired data without manual checks.
- **Robust Error Handling**: Prevents application crashes due to `localStorage` issues.
- **Utility Functions**: Includes helpers like `hasItem` and `clear` for seamless operations.

---

## Installation

Install the library via npm:

```bash
npm install more-to-store
```

---

## Usage

### 1. Import the Library

```javascript
const MoreToStore = require('more-to-store');
```

### 2. Storing Data

Save an item to `localStorage` with optional encryption and expiry:

```javascript
// Save data with encryption and expiry
MoreToStore.setItem('key', { name: 'John Doe' }, 'mySecretKey', 60000); // Expires in 60 seconds

// Save data without encryption or expiry
MoreToStore.setItem('simpleKey', 'Simple Value');
```

### 3. Retrieving Data

Retrieve an item from `localStorage`:

```javascript
// Retrieve encrypted data
const value = MoreToStore.getItem('key', 'mySecretKey');
console.log(value); // { name: 'John Doe' }

// Retrieve non-encrypted data
const simpleValue = MoreToStore.getItem('simpleKey');
console.log(simpleValue); // 'Simple Value'
```

### 4. Automatic Expiration

Data stored with an expiry will be automatically removed once expired. For example:

```javascript
MoreToStore.setItem('tempKey', 'Temporary Data', '', 5000); // Expires in 5 seconds
setTimeout(() => {
  console.log(MoreToStore.getItem('tempKey')); // null
}, 6000);
```

### 5. Removing Data

Manually remove an item from `localStorage`:

```javascript
MoreToStore.removeItem('key');
```

Clear all items from `localStorage`:

```javascript
MoreToStore.clear();
```

### 6. Checking Existence of Data

Check if a key exists in `localStorage`:

```javascript
const exists = MoreToStore.hasItem('key');
console.log(exists); // true or false
```

---

## API Reference

### `setItem(key, value, secretKey = '', expiry = 0)`
- **key**: The key to store the value under.
- **value**: The data to store (can be any JavaScript object).
- **secretKey**: (Optional) A key for AES encryption. Leave empty for no encryption.
- **expiry**: (Optional) Expiry time in milliseconds. Set `0` for no expiry.

### `getItem(key, secretKey = '')`
- **key**: The key of the item to retrieve.
- **secretKey**: (Optional) The key used to decrypt the data.
- **Returns**: The retrieved value or `null` if the item doesn't exist or is expired.

### `removeItem(key)`
- **key**: The key of the item to remove from `localStorage`.

### `clear()`
- Removes all items from `localStorage`.

### `hasItem(key)`
- **key**: The key to check existence for.
- **Returns**: `true` if the key exists, otherwise `false`.

---

## Example Scenarios

1. **Securely Store User Data**:
   ```javascript
   MoreToStore.setItem('user', { id: 1, name: 'John' }, 'superSecretKey');
   ```

2. **Temporary Caching**:
   ```javascript
   MoreToStore.setItem('cache', { data: 'temp' }, '', 30000); // Expires in 30 seconds
   ```

3. **Simplify Reusable Storage Utilities**:
   ```javascript
   if (!MoreToStore.hasItem('visited')) {
     MoreToStore.setItem('visited', true);
   }
   ```

---

## License

This project is licensed under the ISC License.

---

## Author

**Meezan Shaikh**  
Find me on [GitHub](https://github.com/meezan35)!
