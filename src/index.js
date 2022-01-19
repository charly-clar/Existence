const { Blockchain, Transactions } = require('.blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('33d41330635529846e853a02b2a321d6c1c773887388e5bcecc34b3a40ec74e9');
const myWalletAddress = myKey.getPublic('hex');


let savjeeCoin = new Blockchain();

const tx1 = new Transactions(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);


console.log('\nStarting the miner... ');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', savjeeCoin.getBalanceAddress(myWalletAddress));
