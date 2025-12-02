const buttons = document.querySelectorAll(".btn");
const evalBtn = document.querySelector("#equal");
const display = document.querySelector("#display");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let secondOperandReady = false;
let result = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "error";
    return a / b;
}

// central operation handler
function operate(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

evalBtn.addEventListener("click", () => {
    if (operator && secondOperandReady) {
        result = operate(operator, firstOperand, secondOperand);
        display.value = result;
        firstOperand = result;
        operator = "";
        secondOperandReady = false;
    }
});

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let input = e.target.textContent;

        // decimal check
        if (input === "." && display.value.includes(".")) {
            return;
        }

        // handle numbers & decimal
        if (!isNaN(input) || input === ".") {
            display.value += input;

            if (!secondOperandReady) {
                firstOperand = parseFloat(display.value);
            } else {
                secondOperand = parseFloat(display.value);
            }
        }

        // handle operator
        else if (isOperator(input)) {

            // if operator exists and second operand exists → compute first
            if (operator && secondOperandReady) {
                result = operate(operator, firstOperand, secondOperand);
                display.value = result;
                firstOperand = result;
            }

            operator = input;          // store new operator
            display.value = "";        // clear for input
            secondOperandReady = true; // start typing second
        }

        // clear
        else if (input === "C") {
            display.value = "";
            operator = "";
            firstOperand = "";
            secondOperand = "";
            secondOperandReady = false;
            result = "";
        }
    });
});

function isOperator(input) {
    return ["+", "-", "/", "*"].includes(input);
}
