var hasH2 = function (text) {
    var regex = /<h2(?:[^>]+)?>(.*?)<\/h2>/ig;
    var match = regex.exec(text);
    return match;
}

module.exports = hasH2;