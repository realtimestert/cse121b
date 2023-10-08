/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    //const add1 = document.getElementById('add1');
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

//factor1, factor2, product, multiplyNumbers
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
// dividend, divisor, divideNumbers, quotient
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let year = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numberArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numberArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numberArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numberArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numberArray.map(number => number *2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numberArray.map(number => number *2).reduce((sum, number) => sum + number);

