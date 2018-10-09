var inlineElements = ["b", "big", "i", "small", "tt", "abbr", "acronym", "cite", "code", "dfn", "em", "kbd", "strong",
    "samp", "time", "var", "a", "bdo", "br", "img", "map", "object", "q", "script", "span", "sub", "sup", "button",
    "input", "label", "select", "textarea", "u"];

var inlineElementsStartRegex = new RegExp("<(" + inlineElements.join("|") + ")[^>]*?>", "gi");
var inlineElementsEndRegex = new RegExp("</(" + inlineElements.join("|") + ")[^>]*?>", "gi");

var stripInlineTagsAtStartEnd = function (text) {
    text = text.replace(inlineElementsStartRegex, "");
    text = text.replace(inlineElementsEndRegex, "");
    return text;
};

module.exports = stripInlineTagsAtStartEnd;
