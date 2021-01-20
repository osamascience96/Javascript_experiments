const http = require('http');
const server = http.createServer();

// creates a listner emitted, when a new connection is made
server.on('connection', function(socket){
    console.log("New Connection");
});

// listen to some port 
server.listen(3000);

console.log("Listening on port 3000...");