var fs = require('fs');
var event = require('events');

const myEmitter = new event.EventEmitter();

// Register the Callback on when the data from the file is read
fs.readFile('text.txt', (err, message) => {
    if(err){
        console.log(err);
    }else{
        console.log(message.toString());
    }

    // Register a Listener when the callback occurs
    myEmitter.emit("readFile");
});

myEmitter.on("readFile", function(){
    console.log("File Read Successfully");
});