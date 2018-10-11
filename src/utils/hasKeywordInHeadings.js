var hasKeywordInHeadings = function(text, keyword) {
    var regex = new RegExp("<h([1-6])(?:[^>]+)?>.*?(" + keyword + ").*?<\/h\1>", "i");
    return regex.test(text);
}

module.exports = hasKeywordInHeadings;