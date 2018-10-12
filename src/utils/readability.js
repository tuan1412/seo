var getParagraphs = require('./getParagraphs');
var getWords = require('./getWords');
var hasH2 = require('./hasH2');
var getSentences = require('./getSentences');
var hasTransitionWord = require('./hasTransitionWord');

var getReadability = function(text) {
    // Mỗi đoạn văn không dài quá 300 từ
    var maxLength = 300;
    var paragraphs = getParagraphs(text);
    var tooLongParagraphs = paragraphs.filter(function(paragraph) {
        var words = getWords(paragraph);
        return words.length > maxLength;
    });
    var hasTooLongParagraphs = tooLongParagraphs.length > 0;

    //Trong bài có tối thiểu thẻ heading 2
    var hasHeading2 = hasH2(text);

    // Số lượng câu có độ dài hơn 20 từ là 25%
    var maxLengthSentences = 20;
    var maxPercentLengthSentences = 25;
    var sentences = [];
    paragraphs.forEach(function(paragraph) {
        sentences = sentences.concat(getSentences(paragraph));
    });
    console.log(sentences);
    console.log(sentences.length);
    var longSentences = sentences.filter(function(sentence) {
        return getWords(sentence).length > maxLengthSentences;
    });

    var percentLongSentences = ((longSentences.length / sentences.length) * 100).toFixed(1);
    var hasMaxPercentLongSentences = percentLongSentences > maxPercentLengthSentences;

    //Ít nhất 30% câu cần từ nối, cụm từ nối
    var minPercentTransitionWordSentences = 30;
    var transitionWordSentences = sentences.filter(function(sentence) {
        return hasTransitionWord(sentence);
    });
    var percentTransitionWordSentences = ((transitionWordSentences.length / sentences.length) * 100).toFixed(1);
    var hasMinPercentTransitionWordSentences = percentTransitionWordSentences > minPercentTransitionWordSentences;

    return {
        tooLongParagraphs: tooLongParagraphs,
        hasTooLongParagraphs: hasTooLongParagraphs,
        longSentences: longSentences,
        transitionWordSentences: transitionWordSentences,
        hasHeading2: hasHeading2,
        hasMaxPercentLongSentences: hasMaxPercentLongSentences,
        percentLongSentences: percentLongSentences,
        percentTransitionWordSentences: percentTransitionWordSentences,
        hasMinPercentTransitionWordSentences: hasMinPercentTransitionWordSentences
    }
}

var data = require('../example/test.json');
var readability = getReadability(data.content);
console.log(readability.longSentences);
console.log(readability.percentLongSentences);
