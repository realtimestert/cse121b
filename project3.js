
async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

async function getQuote(){
  const quotes = await fetchData("https://favqs.com/api/");
  return quotes;
}

const quotes = await getQuote();
document.querySelector("#quotes").textContent = getQuote.content;
