
var Web3 = require('web3');
// 使用指定的 Provider （e.g 比如在 Mist 中） 或者实例化一个新的 websocket provider
var web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');


console.log(web3);
