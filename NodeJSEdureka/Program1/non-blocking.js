var fs = require('fs');

fs.readFile('test.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    // displaying the data after 2 seconds
    setTimeout(() => {
        console.log(data);
    }, 2000);
});

console.log("Start Here");