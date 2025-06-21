let num1 = undefined;
let num2 = undefined;
let operator = "";


const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (num1 === undefined){
            num1 = button.textContent;
            display.textContent = "";
        }
        else{
            num2 = button.textContent;
        }
        display.textContent += " " + button.textContent;
    })
})

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (operator === ""){
            operator = op.textContent;
            display.textContent += " " + op.textContent;
        }
        else{
            operator = op.textContent
            display.textContent = operate(num1, num2, operator) + " " + operator;
            num1 = display.textContent;
            num2 = undefined;
        }
    })
})

clear.addEventListener("click", () => {
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operator = "";
})

equal.addEventListener("click", () => {
    display.textContent = operate(num1, num2, operator);
    num1 = display.textContent;
    num2 = undefined;
    operator = "";
})


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Not a Smooth Operatorrrr!"
    }
}