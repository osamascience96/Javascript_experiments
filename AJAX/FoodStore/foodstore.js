var xmlHttp = createXMLHttpRequestObject();

function createXMLHttpRequestObject(){
    var xmlObject = null;

    // if the user is using the internet explorer
    if(window.ActiveXObject){
        try{
            xmlObject = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlObject = new XMLHttpRequest();
        }catch(e){
            xmlObject = false;
        }
    }

    if(!xmlObject){
        alert("Can't create the object!");
    }else{
        return xmlObject;
    }
}

function process(){
    if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        let food = encodeURIComponent(document.getElementById('userInput').value);
        // type of request, the server file we want to send the info, and the process to be async
        xmlHttp.open('GET', ("foodstore.php?food=" + food), true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else{
        setTimeout(process, 1000);
    }
}

// creating the callback
function handleServerResponse(){
    if(xmlHttp.readyState == 4){
        // if the communication was successfull, 
        if (xmlHttp.status == 200){
            let xmlResponse = xmlHttp.responseXML;
            let XMLDocumentElement = xmlResponse.documentElement;

            let message = XMLDocumentElement.firstChild.data;

            document.getElementById('underInput').innerHTML = '<span style="color:blue">' + message + '</span>';
            // checkign the input after every second and callign the callback
            setTimeout(process, 1000);
        }else{
            alert('Something went wrong!');
        }
    }
}