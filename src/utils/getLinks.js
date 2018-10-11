var getLinks = function (text) {
    var links = [];
    var regex = /<a(?:[^>]+)?href=(["'])([^"']+)\1(?:[^>]+)?>(.*?)<\/a>/gi;
    var match;
    while ((match = regex.exec(text)) !== null) {
        links.push(match);
    };

    return links.map(function(link) {
        return {
            href: link[2],
            content: link[3]
        }
    });
}

module.exports = getLinks;