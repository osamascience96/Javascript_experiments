
delay(1000)
    .then( () => document.getElementById('sample_msg').innerHTML = "Osama Ahmed")
    .catch( (err) => console.log(err));

function delay(time){

    return new Promise( (resolve, reject) => {

        // return the new promise 
        if (isNaN(time)){
            reject(new Error('Fuck You Man, give me the fucking number'))
        }else{
            setTimeout(resolve, time);
        }
    });
}