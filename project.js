//array to store the calculator history
const history = [];
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator_keys")

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        //something
    }
})

const key = e.target
const action = key.dataset.action

if (!action) {
    console.log("number key!")
}

if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
) {
    console.log("operator key!")
}

if (action === "decimal"){
    console.log("decimal key")
}

if (action === "clear"){
    console.log("clear key")
}

if (action === "calculate") {
    console.log("equal key")
}

//https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/