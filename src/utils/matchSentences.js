var getSentencesInParagraph = function (text) {
    var sentences = [];
    var regex = /[^\.\!\?]*[\.\!\?]/ig;
    var match;
    while ((match = regex.exec(text)) !== null) {
        sentences.push(match);
    };

    return sentences.map(function(sentence) {
        return sentence[0];
    });
}

module.exports = getSentencesInParagraph