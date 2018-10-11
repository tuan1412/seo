var Tokenizer = require('sentence-tokenizer');
var tokenizer = new Tokenizer('Chuck');
tokenizer.setEntry("This is an entry. Possibly composed of several 500.000.000đ sentences! Hello 192.168.1.1. Có rất nhiều đồ như cá, chim...");
console.log(tokenizer.getTokens());

