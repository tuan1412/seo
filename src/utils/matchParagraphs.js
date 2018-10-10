var removeInlineHtmlTags = require('./removeHtmlTags');

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

module.exports = getParagraphsInTags;