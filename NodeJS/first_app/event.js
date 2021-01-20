const EventEmitter = require('events');

var emitter = new EventEmitter();

// creating a listener
emitter.on("messageLogged", function(){
    console.log("Message Logged");
});

// emit an event or producing an event 
emitter.emit("messageLogged");