const EventEmitter = require('events');

var emitter = new EventEmitter();

// creating a listener
emitter.on("messageLogged", (args) => {
    console.log('Message Logged', args);
});

emitter.emit("messageLogged", {id: 1, url: 'http://'});