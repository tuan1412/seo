var data = require('../example/example.json');
var getParagraphs = require('./matchParagraphs');
var removeSpaces = require('./removeSpaces');
var getSentences = require('./matchSentences');
var getWords = require('./matchWords');
var getLinks = require('./matchLinks');
var paragraphs = getParagraphs(data.content);

var para = removeSpaces(paragraphs[0]);
var sentences = getSentences(para);
var words = getWords(para);

// console.log(sentences);

// console.log(words);

// console.log(paragraphs[0])

console.log(getLinks(data.content));