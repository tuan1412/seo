var getLinkType = function (link, host) {
    if (isOtherLink(link)) {
        return "other";
    };
    if (isInternalLink(link, host)) {
        return "internal";
    };
    return "external"
}

var isInternalLink = function (link, host) {
    if (link.indexOf("//") === -1 && link.indexOf("/") === 0) {
        return true;
    }

    if (link.indexOf("#") === 0) {
        return false;
    }
    var regex = /(^[a-z][a-z0-9+\-.]*):\/\/([a-z0-9\-._~%!$&'()*+,;=]+)/i
    var mathches = regex.exec(link) || [];
    var hostLink = mathches[0] || "";
    return hostLink === host;
}

var isOtherLink = function (link) {
    if (link.indexOf("#") === 0) {
        return true;
    }
    var regex = /(^[a-z][a-z0-9+\-.]*):\/\/([a-z0-9\-._~%!$&'()*+,;=]+)/i
    var mathches = regex.exec(link) || [];
    var protocol = mathches[1] || "";
    return protocol !== "" && protocol !== "https" && protocol !== "http";
}

module.exports = getLinkType;