const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        // raise an event 
        this.emit('messageLogged', {msg: message});
    }
}

// adding the logger object to the module
module.exports = Logger;