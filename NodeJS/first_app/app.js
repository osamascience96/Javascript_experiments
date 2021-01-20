const logger = require('./logger');
const messagefunc = require('./love');

console.log(module);

console.log(logger.log('Hello World'));
console.log(logger.love());

console.log(messagefunc('Meray dil ki rani, maay tujh saay piyar karta hu.'))

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

const fs = require('fs');

// var files = fs.readdirSync("./");
// console.log(files)

fs.readdir("./", (error, files) => {
    if(error){
        console.log("Error", error);
    }else{
        console.log("Files", files);
    }
});