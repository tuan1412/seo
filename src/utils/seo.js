var getLinks = require('./getLinks');
var getLinkTypes = require('./getLinkType');
var getParagraphs = require('./getParagraphs');
var hasKeyword = require('./hasKeywordInHeadings');
var getImages = require('./getImages');
var getWords = require('./getWords');

var getSeo = function(text, keyword, url) {
    var links = getLinks(text);

    // sử dụng link ngoài
    var externalLinks = links.filter(function(link) {
        return getLinkTypes(link.href, url) === 'external';
    });
    var hasExternalLinks = externalLinks.length > 0;
    
    // sử dụng link trong
    var internalLinks = links.filter(function(link) {
        return getLinkTypes(link.href, url) === 'internal';
    });
    var internalLinks = externalLinks.length > 0;

    // từ khóa xuất hiện trong heading ít nhất một lần
    var hasKeywordHeadings = hasKeyword(text, keyword);

    // từ khóa chính xuất hiện ở đầu bài viết ít nhất một lần
    var paragraphs = getParagraphs(text);
    var firstParagraph = paragraphs[0] || "";
    var hasKeyWordInFirstParagraph = firstParagraph.includes(keyword);

    // tên ảnh có chứa từ khóa chính
    var images = getImages(text);
    var keywordInAltImages = images.filter(function(image) {
        return image.alt.includes(keyword);
    });
    var hasKeywordInAlt = keywordInAltImages.length > 0;

    // mật độ chứa từ khóa chính
    var lengthWords = paragraphs.reduce(function(acc, cur) {
        return acc + getWords(cur).length;
    }, 0);
    var regex = new RegExp(keyword, "gi");
    var keywordCount = paragraphs.reduce(function(acc, cur) {
        var match;
        var count = 0;
        while ((match = regex.exec(cur)) !== null) {
            count++;
        };
        return acc + count;
    }, 0);
    var percentKeyWords = ((keywordCount / lengthWords)*100).toFixed(1);
    
    return {
        hasExternalLinks: hasExternalLinks,
        internalLinks: internalLinks,
        hasKeywordHeadings: hasKeywordHeadings,
        hasKeyWordInFirstParagraph: hasKeyWordInFirstParagraph,
        keywordInAltImages: keywordInAltImages,
        hasKeywordInAlt: hasKeywordInAlt,
        percentKeyWords: percentKeyWords,
        keywordCount: keywordCount
    }

}

var data = require('../example/test.json');
var seo = getSeo(data.content, "sầu riêng", "http://suckhoehangngay.vn");
console.log(seo.percentKeyWords);
console.log(seo.keywordCount);
console.log(seo.hasKeyWordInFirstParagraph);