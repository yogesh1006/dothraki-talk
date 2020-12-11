var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverUrl ="https://api.funtranslations.com/translate/dothraki.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
}




btnTranslate.addEventListener("click", function clickEventHandler() {
    //outputDiv.innerText="sdfghjkjhgfdfgh " + txtInput.value;
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        //.then(json=> console.log(json.contents.translated))
        .catch(errorHandler)
})