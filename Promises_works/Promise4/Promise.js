let giphyAPI = "http://api.giphy.com/v1/gifs/search?rating=PG&api_key=b1J6qKnQoIP3JewNsm5EjVvu9I6TdLtm&q=";
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";


// function that creates the heading
function SetHeadingStyle(data){
    var heading = document.createElement("h4");
    var textNode = document.createTextNode(data);
    heading.appendChild(textNode);
    document.body.appendChild(heading);
}

function SetImageStyle(src, alt, width){
    var imageObject = document.createElement("img");
    imageObject.setAttribute("src", src);
    imageObject.setAttribute("width", width);
    imageObject.setAttribute("alt", alt);
    document.body.appendChild(imageObject);
}

let promiseArray = [];

for(let wordSize = 3; wordSize < 10; wordSize++){
    promiseArray.push(wordGIF(wordSize));
}

Promise.all(promiseArray)
    .then(result => {
        for(let i=0; i < result.length; i++){
            SetHeadingStyle(result[i].word);
            if(result[i].img !== null){
                SetImageStyle(result[i].img, result[i].word, 500);
            }
        }
    })
    .catch(err => console.err(err));

// creating the async function 
async function wordGIF(wordLength){
    let response1 = await fetch(wordnikAPI + "&minLength="+wordLength+"&maxLength="+wordLength);
    let json1 = await response1.json();

    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();

    let image_url = null;

    try{
        image_url = json2.data[0].images['fixed_height_small'].url;
    }catch(error){
        console.log('No Image found for ' + json1.word);
        console.error(error)
    }

    return {
        word: json1.word, 
        img: image_url,
    }
}