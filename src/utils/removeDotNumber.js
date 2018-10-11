var regex = /(\.|,)(?=\d+)/gi;

var removeDotNumber = function(text) {
    text = text.replace(regex, "");
    return text;
}

module.exports = removeDotNumber;