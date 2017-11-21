function parseQuery(p) {
    var regex = /(?:[#&?]([^=&#]+)(?:=([^&#]*))?)/g;
    var m, query = {};
    while (m = regex.exec(p)) {
        query[decodeURIComponent(m[1])] = decodeURIComponent(m[2]||"");
    }
    return query;
}

function makeQuery(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
}
