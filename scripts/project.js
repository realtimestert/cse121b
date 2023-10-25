let quoteList = [];
const button = document.querySelector("#button");
const oldQuotes = document.querySelector("#writtenQuote");
const url = "https://favqs.com/api/qotd";
const urlList = "https://favqs.com/api/";
let results = null;

async function getQuote(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

async function getquoteList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data= await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("output");
  const html = `<h2>${data.name}<h2>`;
  outputElement.innerHTML = html;
  console.log(results);
}

function doStuffList(data) {
  console.log(data);
  const quoteListElement = document.querySelector("#outputList");
  const quoteList = data.results;
  quoteList.forEach((currentItem) => {
    const html = `<li>${currentItem}</li`;
    quoteListElement.innerHTML += html;
  });
}

getQuote(url);
console.log(results);

getquoteList(urlList);
/*button.addEventListener("click", () => {
  resizeTo();
  getQuote();
})

function reset(){
  artical.innerHTML = "";
}

let getQuote = async () => {
  //change this below
  let quote = document.querySelector("#inputText").ariaValueMax;
  console.log(quote);
  let url = `https://api.quotable.io`;
  const response = await fetch(url);
  if (response.ok){
    quoteList = await response.json();
    showQuote(quoteList);
  }
  else {
    alert("error!");
  }
}

function showQuote(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quote.text;
}
*/