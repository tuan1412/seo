var getSentencesInParagraph = function (text) {
    var sentences = [];
    var regex = /([^\.\!\?\s].*?)[\.\!\?\n]/ig;
    var match;
    while ((match = regex.exec(text)) !== null) {
        sentences.push(match);
    };

    return sentences.map(function(sentence) {
        return sentence[1];
    });
}

module.exports = getSentencesInParagraph