var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    // print the pathname 
    console.log("Request for " + pathname + " received");

    fs.readFile(pathname.substr(1), function(err, data) {
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-type': 'text/html'});
        }else{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });

}).listen(3000); // listen at port 3000

console.log('Server running at localhost:3000');