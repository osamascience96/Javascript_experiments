let giphyAPI = "http://api.giphy.com/v1/gifs/search?rating=PG&api_key=b1J6qKnQoIP3JewNsm5EjVvu9I6TdLtm&q=";
let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
        document.getElementById('randomWord').innerHTML = json.word;
        return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => {
        document.getElementById("gif_img").src = json.data[0].images['fixed_height_small'].url;
    })
    .catch(err => console.log(err));