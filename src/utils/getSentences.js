// function compact(str) {
//     var res = str.trim();
//     res = res.replace('  ', ' ');
//     return res;
// }

// function isUpperCase(str) {
//     if (!str) return false;
//     return str[0] == str[0].toUpperCase() && str[0] != str[0].toLowerCase();
// }

// var getSentences = function (text) {
//     if (!text) return [];
//     var words = text.split(' ');
//     var endingWords = words.filter(function (w) {
//         return w.endsWith('.') || w.endsWith('!') || w.endsWith('?');
//     });
//     var lastSentence = words[0];
//     var sentences = [];
//     words.reduce(function (prev, cur) {
//         var curNormalized = cur.normalize();
//         if (endingWords.indexOf(prev) != -1 && isUpperCase(cur)) {
//             sentences.push(compact(lastSentence));
//             lastSentence = "";
//         }
//         lastSentence = lastSentence + " " + curNormalized;
//         return cur;
//     });
//     if (lastSentence != " ") sentences.push(compact(lastSentence));
//     return sentences;
// }
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
var removeInline = require('./removeHtmlTags');

function isCapitalLetter(character) {
    return character !== character.toLocaleLowerCase();
}

function isNumber(character) {
    return !isNaN(parseInt(character, 10));
}

function isQuotation(character) {
    return "'" === character ||
        "\"" === character;
}

function isValidSentenceBeginning(sentenceBeginning) {
    sentenceBeginning = removeInline(sentenceBeginning);
    return (
        isCapitalLetter(sentenceBeginning.trimLeft()[0]) ||
        isNumber(sentenceBeginning.trimLeft()[0]) ||
        isQuotation(sentenceBeginning.trimLeft()[0])
    );
}

var getSentences = function (text) {
    var splitSentences = text.split(/(?<=\.|!|\?)\s|&nbsp;/);
    var sentences = [];
    var lastSentence = "";
    splitSentences.forEach(function(cur) {
        if (!isValidSentenceBeginning(cur)) {
            lastSentence = lastSentence + " " + cur;
        } else if (lastSentence == "") {
            lastSentence = cur
        } else {
            sentences.push(lastSentence);
            lastSentence = cur;
        }
    });
    sentences.push(lastSentence);
    return sentences
}

// console.log(isValidSentenceBeginning(' "Nên mình cần phải tập trung <b>rất nhiều</b>".'))
console.log(getSentences('<b>Thiếu luyện tập: </b>khi cơ thể không được vận động cũng có thể dẫn tới trầm cảm. Bởi bình thường não sẽ sản sinh ra những chất hóa học tạo cảm giác tốt  như dopamine và serotonin. Việc tập luyện thường xuyên sẽ giúp não sản sinh ra nhiều chất này giúp mọi người cảm thấy luôn năng động và hưng phấn.'));
module.exports = getSentences

