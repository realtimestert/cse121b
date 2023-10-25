// Random quote script
// Import the fetch function from the fetch module
import { fetch } from "./fetch.js";

// Define an array of colors for the background
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

// Define a function to get a random element from an array
function getRandomElement(array) {
  // Get a random index between 0 and the length of the array
  const index = Math.floor(Math.random() * array.length);
  // Return the element at that index
  return array[index];
}

// Define a function to get a random quote from the API
async function getRandomQuote() {
  // Use fetch to make a GET request to the API endpoint
  const response = await fetch("https://favqs.com/api/qotd");
  // Check if the response is ok
  if (response.ok) {
    // Parse the response as JSON
    const data = await response.json();
    // Return the quote and the author from the data
    return {
      quote: data.quote.body,
      author: data.quote.author,
    };
  } else {
    // Throw an error if the response is not ok
    throw new Error(`An error occurred: ${response.status}`);
  }
}

// Define a function to update the DOM with a new quote and background color
async function updateDOM() {
  try {
    // Get a random quote from the API
    const { quote, author } = await getRandomQuote();
    // Get a random color from the array
    const color = getRandomElement(colors);
    // Get the elements from the DOM by their IDs
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const bodyElement = document.getElementById("body");
    // Update the text content of the elements with template literals
    quoteElement.textContent = `"${quote}"`;
    authorElement.textContent = `- ${author}`;
    // Update the background color of the body element
    bodyElement.style.backgroundColor = color;
  } catch (error) {
    // Log the error to the console
    console.error(error);
  }
}

// Call the updateDOM function when the window loads
window.onload = updateDOM;