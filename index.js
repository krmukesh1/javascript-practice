// const userName = prompt("give your usename");
// alert("Welcome " + userName);

const submitBtn = document.querySelector("#btn");
const textarea = document.querySelector("textarea");
const output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/uk2us.json";
function getTranslation(text) {
  return url + "?" + "text=" + text;
}
function error() {
  console.log("error occured", error);
}
function clickHandler() {
  // console.log("clicked");
  // console.log(textarea.value);
  // output.innerText = textarea.value;
  var inputText = textarea.value;
  fetch(getTranslation(inputText))
    .then((Response) => Response.json())

    .then((json) => {
      var translateText = json.contents.translated;
      output.innerText = translateText;
    })
    .catch(error);
}
submitBtn.addEventListener("click", clickHandler);
