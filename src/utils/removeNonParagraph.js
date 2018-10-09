var blockElements = [ "address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption",
	"figure", "footer", "form", "header", "hgroup", "hr", "li", "main", "nav",
	"noscript", "ol", "output", "pre", "section", "table", "tfoot", "ul", "video" ];
var removeNonParagraph = function(text) {
    var nonParagraphRegex = new RegExp('<('+ blockElements.join('|') + ')(?:[^>]+)?>.*?<\/\1>', "gi");
    text = text.replace(nonParagraphRegex, "");
    return text;
}

var data = require('../example/paper.json');

console.log(removeNonParagraph(data.content));

