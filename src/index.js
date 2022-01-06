const {Blockchain, Transactions} = require('./blockchain');


let savjeeCoin = new Blockchain();
savjeeCoin.createTransaction( new Transactions('address1', 'address2', 100 ));
savjeeCoin.createTransaction( new Transactions('address1', 'address2', 50 ));

console.log('\nStarting the miner... ');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\nBalance of xavier is', savjeeCoin.getBalanceAddress('xaviers-address'));

console.log('\nStarting the miner again... ');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\nBalance of xavier is', savjeeCoin.getBalanceAddress('xaviers-address'));