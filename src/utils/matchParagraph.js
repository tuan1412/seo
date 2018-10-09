var data = require('../example/paper.json');
var removeInlineHtmlTags = require('./removeHtmlTags');
var getSentences = require('./matchSentences');
var getWords = require('./matchWords');

var getParagraphsInTags = function (text) {
    var paragraphs = [];
    var regex = /<p(?:[^>]+)?>(.*?)<\/p>/ig;
    var match;

    while ((match = regex.exec(text)) !== null) {
        paragraphs.push(match);
    };

    return paragraphs.map(function(paragraph) {
        return removeInlineHtmlTags(paragraph[1]);
    });
}

var rs = getParagraphsInTags(data.content);
console.log(getWords(getSentences(rs[1])[1]));
