function compact(str) {
    var res = str.trim();
    res = res.replace('  ', ' ');
    return res;
}

function isUpperCase(str) {
    if (!str) return false;
    return str[0] == str[0].toUpperCase() && str[0] != str[0].toLowerCase();
}

var getSentences = function (text) {
    if (!text) return [];
    var words = text.split(' ');
    var endingWords = words.filter(function (w) {
        return w.endsWith('.') || w.endsWith('!') || w.endsWith('?');
    });
    var lastSentence = words[0];
    var sentences = [];
    words.reduce(function (prev, cur) {
        var curNormalized = cur.normalize();
        if (endingWords.indexOf(prev) != -1 && isUpperCase(cur)) {
            sentences.push(compact(lastSentence));
            lastSentence = "";
        }
        lastSentence = lastSentence + " " + curNormalized;
        return cur;
    });
    if (lastSentence != " ") sentences.push(compact(lastSentence));
    return sentences;
}
// var getSentences = function (text) {
//     var sentences = [];
//     var regex = /([^\.\!\?\s].*?)[\.\!\?\n]/ig;
//     var match;
//     while ((match = regex.exec(text)) !== null) {
//         sentences.push(match);
//     };

//     return sentences.map(function (sentence) {
//         return sentence[1];
//     });
// }
module.exports = getSentences

