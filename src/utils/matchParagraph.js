var data = require('../example/paper.json');
var removeInlineHtmlTags = require('./removeHtmlTags');
var getSentences = require('./matchSentences');

var getParagraphsInTags = function (text) {
    var paragraphs = [];
    var regex = /<p(?:[^>]+)?>(.*?)<\/p>/ig;
    var match;

    while ((match = regex.exec(text)) !== null) {
        console.log(match);
        paragraphs.push(match);
    };

    return paragraphs.map(function(paragraph) {
        return removeInlineHtmlTags(paragraph[1]);
    });
}

var rs = getParagraphsInTags(data.content);
