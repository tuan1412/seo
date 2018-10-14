var removeSpaces = require('./removeSpaces');
var removeInline = require('./removeHtmlTags');

var getWords = function (text) {
    if (text === "") {
        return [];
    }
    text = removeSpaces(text);
    text = removeInline(text);
    var words = text.split(/\s/g);
    words = words.map(function(word) {
        return removePunctuation(word);
    });
    words = words.filter(function(word) {
        return word !== "";
    })
    return words;
}

var punctuationRegexString = "[\\–\\-\\(\\)_\\[\\]’“”\"'.?!:;,¿¡«»‹›\u2014\u00d7\u002b\u0026\<\>]+";
var punctuationRegexStart = new RegExp("^" + punctuationRegexString);
var punctuationRegexEnd = new RegExp(punctuationRegexString + "$");

var removePunctuation = function(text) {
    text = text.replace(punctuationRegexStart, "");
    text = text.replace(punctuationRegexEnd, "");
    return text;
}

console.log(getWords("Một quả dưa  <b> giá </b> từ 500.000 - 1.000.000 vẫn bán đắt hàng!"))
module.exports = getWords