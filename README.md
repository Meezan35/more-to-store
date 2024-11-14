# More to Store

`More to Store` is a simple and fast way to interact with `localStorage` with optional encryption support. It allows developers to store, retrieve, and manage data in `localStorage` securely.

## Installation

To install the package, run the following command:


npm install more-to-store

## Importing Module


import MoreToStore from 'more-to-store';

## Usage 

// Storing the data
MoreToStore.setItem('theme', 'dark');

// Retrieving the data
const theme = MoreToStore.getItem('theme');
console.log(theme); // Output: 'dark'

// Check if a key exists
const hasTheme = MoreToStore.hasItem('theme');
console.log(hasTheme); // Output: true

// Remove a key
MoreToStore.removeItem('theme');


## Data Encryption

// Store data with encryption
MoreToStore.setItem('user', { name: 'Jon', age: 30 }, 'mySecretKey');

// Retrieve data with decryption
const user = MoreToStore.getItem('user', 'mySecretKey');
console.log(user); // Output: { name: 'Jon', age: 30 }

## Clear Store
MoreToStore.clear();


