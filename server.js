var http = require("http");

function rep_common(rep) {
    var content = "Another Page";
    rep.writeHead(200, {
        'Content-Length': content.length,
        'Content-Type': 'text/html'
    });
    rep.write(content);
    rep.end();
}

http.createServer(function(res, rep) {
    console.log(res.url);

    if (res.url === "/a.html") {
        rep_common(rep);
    } else {
        var body = "<a href='a.html'>Hello Cache Demo</a>";
        rep.writeHead(200, {
            'Content-Length': body.length,
            'Content-Type': 'text/html',
            'Expires': new Date((new Date).getTime() + 5 * 60 * 1000)
        });
        rep.write(body);
        rep.end();
    }

}).listen(8080);