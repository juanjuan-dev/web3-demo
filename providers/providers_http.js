var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');

// 改变 provider
web3.setProvider('ws://localhost:8546');