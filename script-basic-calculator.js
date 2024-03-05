const numberBtns = document.querySelectorAll('.number-btn');
const largeScreen = document.querySelector('#current-calculation');
const smallScreen = document.querySelector('#previous-operation');

let firstNumber;
let secondNumber;
let operator;
let calcVal;

for(let i=0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click', () => {
    let text = numberBtns[i].textContent;
    numberBtns[i].classList.add(text);
    updateMainInterface(text);

    });
};

const decimal = document.querySelector('#btn-decimal');
decimal.addEventListener('click', () => {
    if(largeScreen.textContent.includes('.')){

    }
    else{
        let text = decimal.textContent;
        updateMainInterface(text);
    }
});

const clear = document.querySelector('#btn-clear');
clear.addEventListener('click', () => {
    clearMainInterface();
    clearSecondaryInterface();
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    calcVal = undefined;
});

const backspace = document.querySelector('#btn-delete');
backspace.addEventListener('click', () => {
    deleteLastCharacter();
});

const division = document.querySelector('#btn-divide');
division.addEventListener('click', () => {
    if(largeScreen.textContent === "ERROR"){
        let input = division.textContent;
        console.log(input);
        errorHandler(input);
    }
    else{
        firstNumber = Number(largeScreen.textContent);
        updateSecondaryInterface();
        updateOperator(division.textContent);
        smallScreen.textContent += ` ${operator}`
        clearMainInterface();
    }
})

const multiplication = document.querySelector('#btn-multiply');
multiplication.addEventListener('click', () => {
    if(largeScreen.textContent === "ERROR"){
        let input = multiplication.textContent;
        console.log(input);
        errorHandler(input);
    }
    else{
        firstNumber = Number(largeScreen.textContent);
        updateSecondaryInterface();
        updateOperator(multiplication.textContent);
        smallScreen.textContent += ` ${operator}`
        clearMainInterface();
    }
})

const subtraction = document.querySelector('#btn-subtract');
subtraction.addEventListener('click', () => {
   
    if(largeScreen.textContent === "ERROR"){
        let input = subtraction.textContent;
        console.log(input);
        errorHandler(input);
    }
    else{
        firstNumber = Number(largeScreen.textContent);
        updateSecondaryInterface();
        updateOperator(subtraction.textContent);
        smallScreen.textContent += ` ${operator}`
        clearMainInterface();
    }
})

const addition = document.querySelector('#btn-add');
addition.addEventListener('click', () => {
    if(largeScreen.textContent === "ERROR"){
        let input = addition.textContent;
        console.log(input);
        errorHandler(input);
    }
    else{
        firstNumber = Number(largeScreen.textContent);
        updateSecondaryInterface();
        updateOperator(addition.textContent);
        smallScreen.textContent += ` ${operator}`
        clearMainInterface();
    }

})

const calculation = document.querySelector('#btn-equals');
calculation.addEventListener('click', () => {
    if(operator === undefined && firstNumber === undefined){
        
    }
    else if(operator === undefined){

    }
    else{
        if(largeScreen.textContent === 'ERROR'){
            clearMainInterface();
            clearSecondaryInterface();
        }
        else{
            secondNumber = Number(largeScreen.textContent);
            smallScreen.textContent += ` ${secondNumber}`;
            clearMainInterface();
            operate(firstNumber, secondNumber, operator);
            if(isError()){

            }
            else {
                updateMainInterface(calcVal);
            }
        }
    }
})

function updateMainInterface(input) {
    largeScreen.textContent += input;
};

function updateSecondaryInterface() {
    smallScreen.textContent = largeScreen.textContent;
    
}
function updateOperator(o){
    operator = o;
}

function clearMainInterface() { 
    largeScreen.textContent = "";
}

function clearSecondaryInterface() {
    smallScreen.textContent = "";
}

function deleteLastCharacter() {
    if(largeScreen.textContent === 'ERROR'){
        clearMainInterface();
    }
    else{
        largeScreen.textContent = largeScreen.textContent.slice(0, -1);
    }
}

function operate(a, b, o){
    if (o === '+'){
        n = add(a, b);
        calcVal = n.toFixed(6).replace(/0+$/, "");
    }
    else if (o === '-') {
        n = subtract(a, b);
        calcVal = n.toFixed(6).replace(/0+$/, "");
    }
    else if (o ==='x'){
        n = multiply(a, b);
        calcVal = n.toFixed(6).replace(/0+$/, "");
    }
    else if (o === '/'){
        if(secondNumber === 0){
            largeScreen.textContent = `ERROR`;
        }
        else {
            n = divide(a, b);
            calcVal = n.toFixed(6).replace(/0+$/, "");
        }
    }
}

function errorHandler(input){
    clearMainInterface();
    firstNumber = 0;
    operator = input;
    console.log(`operator ${operator}`)
    smallScreen.textContent = `0 ${operator}`;
}

function isError(){
    if(largeScreen.textContent === 'ERROR'){
        return true; 
    }
    else {
        return false;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

