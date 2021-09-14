var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text 
}

function errorHandeler(error){
    console.log("Error Occured",error) ;
    alert("something went wrong! ")
}
function clickHandeler() {
    // outputDiv.innerText("Caka"+txtInput.value) ;

    var inputText = txtInput.value ;  //taking your input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated ;
        outputDiv.innerText = translatedText ;
    })
    .catch(errorHandeler)
};

btnTranslate.addEventListener("click", clickHandeler );