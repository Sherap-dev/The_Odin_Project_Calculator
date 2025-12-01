const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

let inputNum = "";
let firstNum = "";
let secondNum = "";
let operator = "";



buttons.forEach(btn =>{
    btn.addEventListener("click",(e) => {
        let input = e.target.textContent;

        if(input === "." && firstNum.includes(".")){
            return;
        }

        if(!isNaN(input) || input === "."){
            inputNum += input;
            display.value = inputNum;
         
        }else if (input === "-" || input === "+" || input === "/" || input === "*"){
            operator = input;
            firstNum = display.value
            display.value = ""
            secondNum = firstNum
            console.log(secondNum)
            display.value = operator;
        }else if( input === "C"){
            operator = "";
            firstNum = "";
            secondNum = "";
            inputNum = "";
            display.value = "";
        }
        
    //  if(operator.includes("+") || operator.includes("/") || operator.includes("*") || operator.includes("-")){
    //     secondNum = inputNum;
    //     console.log(`im secoond numbners${typeof secondNum}`)
    //  }



    })
})