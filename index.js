const Transaction = require('./src/transaction');
const Wallet = require('./src/wallet');

// Your Temtum wallet keys. If you don't have a key pair, you can generate one using Wallet.generateKeyPair method
const PUBLIC_KEY = '02941c359bd9dc27990ef8bceb1466b5b832bad4289dae9ed77facf5850559790e';
const PRIVATE_KEY = 'b01f79c616f252130fd877ab692be3ba9432b383eeb30c3c73546581e4ff4aa0';
const API_URL = 'http://159.89.19.249:3001/v1';

// Create Transaction instance
const transaction = new Transaction();
const wallet = new Wallet(API_URL);

wallet.getUnspent(PUBLIC_KEY).then((response) => {
  const txHex = transaction.create(response.unspentTxOuts, '0378025824a56035bd4acbf1c1d04faa85f15be14ed17ad46e5d9a8607f3bee639', 1, PRIVATE_KEY);

  wallet.sendTransaction(txHex).then(() => {
    console.log('You have successfully sent a transaction!');
  });
});