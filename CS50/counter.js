if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function counts(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector("h1").innerHTML = counter;
    localStorage.setItem('counter', counter);
    // if(counter % 10 === 0){
    //     alert(`The counter is now ${counter}`)
    // }
}

// When the dom is done loaded
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').addEventListener('click', counts); 
    // setInterval(counts, 1000);
});
// one way of define the onclick 
// document.querySelector('button').onclick = counts;