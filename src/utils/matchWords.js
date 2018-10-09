var getWords = function (text) {
    var words = [];
    var regex = /[^\t\r\n\u00A0 !\"#$%&()*+,\-.\\/:;<=>?@\[\\\]^_`{|}~]+/ig;
    var match;
    while ((match = regex.exec(text)) !== null) {
        words.push(match);
    };

    return words.map(function(word) {
        return word[0];
    });
}

module.exports = getWords