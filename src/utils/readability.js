var getParagraphs = require('./matchParagraphs');
var getWords = require('./matchWords');
var data = require('../example/paper.json');

var tooLongParagraphs = function(text) {
    var maxLength = 300;
    var paragraphs = getParagraphs(text);
    var tooLongParagraphs = paragraphs.filter(function(paragraph) {
        var words = getWords(paragraph);
        console.log(words);
        return words.length > maxLength;
    });
    return tooLongParagraphs;
}

