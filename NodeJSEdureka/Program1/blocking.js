var fs = require('fs');
// reading the file from the synchronous function, the process will wait for the thread to be complete
var data = fs.readFileSync('test.txt');
// Then this line will be executed
console.log(data.toString());
console.log("End Here");