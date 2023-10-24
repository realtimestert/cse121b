import fetch from "node-fetch";

// Array to store the calculator history
const history = [];

// Function to fetch the external data from the JSON API
async function fetchData() {
  const response = await fetch("https://newton.vercel.app/");
  const data = await response.json();
  return data;
}

// Function to perform the calculator operation
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}

// Function to update the calculator display
function updateDisplay(result) {
  const output = document.querySelector("#result");
  output.textContent = result;
}

// Add event listeners to the input elements
const calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", () => {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const operator = document.querySelector("#operator").value;

  const result = calculate(num1, num2, operator);
  updateDisplay(result);

  // Add the result to the calculator history
  history.push({
    num1,
    num2,
    operator,
    result,
  });
});

// Add an event listener to the clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
  document.querySelector("#result").textContent = "";
});

// Fetch the external data from the JSON API and update the calculator display
fetchData().then((data) => {
  updateDisplay(data.result);
});