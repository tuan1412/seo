var removeSpace = function(text) {
    text = text.replace(/\&nbsp;/g, " ");
    text = text.replace(/\s{2,}/g, " " );
	text = text.replace(/\s\./g, "." );
    text = text.replace(/^\s+|\s+$/g, "" );

	return text;
}

module.exports = removeSpace;