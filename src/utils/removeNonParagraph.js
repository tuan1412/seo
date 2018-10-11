var blockElements = [ "address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption",
	"figure", "footer", "form", "header", "hgroup", "hr", "li", "main", "nav",
    "noscript", "ol", "output", "pre", "section", "table", "tfoot", "ul", "video" , "tbody", "td", "tr"];

var removeSpaces = require('./removeSpaces');

var removeNonParagraph = function(text) {
    text = removeSpaces(text);
    var nonParagraphRegex = new RegExp('<('+ blockElements.join('|') + ')(?:[^>]+)?>.*?<\/\\1>', "gi");
    text = text.replace(nonParagraphRegex, "");
    var blockEndRegex = new RegExp("</(" + blockElements.join("|") + ")[^>]*?>", "gi");
    text = text.replace(blockEndRegex, "");
    return text;
}

module.exports = removeNonParagraph;

