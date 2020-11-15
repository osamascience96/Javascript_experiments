let giphyAPI = "http://api.giphy.com/v1/gifs/search?rating=PG&api_key=b1J6qKnQoIP3JewNsm5EjVvu9I6TdLtm&q=";
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

wordGIF()
    .then(result => {
        document.getElementById('random_word').innerHTML = result.word;
        document.getElementById('picture').src = result.img;
    })
    .catch(err => console.error(err));

// making the asyn function 
async function wordGIF(){
    let response1 = await fetch(wordnikAPI);
    let json1 = await response1.json();
    let response2 = await fetch(giphyAPI + json1.word);
    let json2 = await response2.json();

    let img_url = json2.data[0].images['fixed_height_small'].url;

    return {
        word: json1.word,
        img: img_url,
    }
}