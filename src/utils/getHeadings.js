var getSubHeadings = function (text) {
    var subHeadings = [];
    var regex = /<h([1-6])(?:[^>]+)?>(.*?)<\/h\1>/ig;
    var match;

    while ((match = regex.exec(text)) !== null) {
        subHeadings.push(match);
    };

    return subHeadings.map(function(subHeading) {
        return (subHeading[2]);
    });
}

module.exports = getSubHeadings;