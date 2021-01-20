// The exported module can also contain the functions.
// function defined within the scope of this module
function log (message){
    console.log(message);
}

// adding the function to the exports
module.exports.log = log;

module.exports.love = () => {console.log('She also loves you Osama!')};