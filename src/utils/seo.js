var getLinks = require('./getLinks');
var getLinkTypes = require('./getLinkType');
var getSubHeadings = require('./getHeadings');
var getParagraphs = require('./getParagraphs');
var hasKeywordHeadings = require('./hasKeywordInHeadings');
var getImages = require('./getLinks');

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
    var hasKeywordHeadings = hasKeywordInHeadings(text, keyword);

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
    
    return {
        hasExternalLinks: hasExternalLinks,
        internalLinks: internalLinks,
        hasKeywordHeadings: hasKeywordHeadings,
        hasKeyWordInFirstParagraph: hasKeyWordInFirstParagraph,
        hasKeywordInAlt: hasKeywordInAlt
    }

}