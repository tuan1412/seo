// var removeInlineHtmlTags = require('./removeHtmlTags');
var removeNonparagraph = require('./removeNonParagraph');
// var removeDotNumber = require('./removeDotNumber');

var getParagraphsInTags = function (text) {

    var text = removeNonparagraph(text);
    // text = removeDotNumber(text);
    
    var paragraphs = [];
    var regex = /<p(?:[^>]+)?>(.*?)<\/p>/ig;
    var match;

    while ((match = regex.exec(text)) !== null) {
        paragraphs.push(match);
    };

    paragraphs = paragraphs.map(function(paragraph) {
        return paragraph[1];
    });

    paragraphs.filter(function(paragraph) {
        return paragraph === "";
    });

    if (paragraphs.length === 0) {
        paragraphs = [text];
    }

    return paragraphs;
}

module.exports = getParagraphsInTags;