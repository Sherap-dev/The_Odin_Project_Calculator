const buttons = document.querySelectorAll(".btn");
const evalBtn = document.querySelector("#equal")
const display = document.querySelector("#display");

let firstOperand = "";
let secondOperand = "";
let secondOperandready = false;
let operator = "";
let result = ""

function add(firstOperand,secondOperand){
    result = firstOperand + secondOperand;
    display.value = result
}

function substract(firstOperand,secondOperand){
    result = firstOperand - secondOperand;
    display.value = result
}

function multiply(firstOperand,secondOperand){
    result = firstOperand * secondOperand;
    display.value = result
}

function divide(firstOperand,secondOperand){
    if(secondOperand === 0 || firstOperand === 0){
        let message = "error"
        display.value = message
    }
    result = firstOperand / secondOperand;
    display.value = result
}


evalBtn.addEventListener("click", () => {

    switch(operator){
        case "+" :
            add(firstOperand,secondOperand);;
            break;
        case "-" :
            substract(firstOperand,secondOperand);
            break;
        case "*" :
            multiply(firstOperand,secondOperand);
            break;
        case "/" :
            divide(firstOperand,secondOperand);
    }

})

substract(firstOperand,secondOperand)


buttons.forEach(btn =>{
    btn.addEventListener("click",(e) => {
        let input = e.target.textContent;

        if(input === "." && display.value.includes(".")){
            return
        }

       if(!isNaN(input) || input === "."){
        display.value += input;

        if(!secondOperandready){
            firstOperand = parseFloat(display.value);
        }else { secondOperand = parseFloat(display.value);
            console.log(firstOperand)
            console.log(secondOperand)
        }

       }
       else if(input === "-" || input === "+" || input === "/" || input === "*"){
        operator = input;
        display.value = "";
        secondOperandready = true;
       }
       else if(input === "C"){
        display.value = "";
        operator = ""
        firstOperand = "";
        secondOperand = ""
        secondOperandready = false
       }
    })
})

