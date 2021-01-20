const Logger = require('./logger');

const logger = new Logger();

// Register a Listener with a callback
logger.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});

logger.log("I Love you Meri Jaan");