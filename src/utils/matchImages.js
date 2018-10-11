var getLinks = function (text) {
    var images = [];
    var regex = /<img(?:[^>]+)?src=(["'])([^"']+)\1(?:[^>]+)?(alt=(["'])([^"']+)\3)?(?:[^>]+)?>/gi;
    var match;
    while ((match = regex.exec(text)) !== null) {
        images.push(match);
    };

    return images.map(function(image) {
        return {
            src: image[2],
            alt: image[4] || ""
        }
    });
}

module.exports = getLinks;