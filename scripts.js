
const numberBtns = document.querySelectorAll('.number-btn');
const largeScreen = document.querySelector('#current-calculation');
const smallScreen = document.querySelector('#previous-operation');

for(let i=0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click', () => {
    let text = numberBtns[i].textContent;
    numberBtns[i].classList.add(text);
    updateMainInterface(text);

    });
};

const clear = document.querySelector('#btn-clear');
clear.addEventListener('click', () => {
    clearMainInterface();
    clearSecondaryInterface();
});

const backspace = document.querySelector('#btn-delete');
backspace.addEventListener('click', () => {
    deleteLastCharacter();
});

const division = document.querySelector('#btn-divide');
division.addEventListener('click', () => {
    let text = " ";
    text += division.textContent;
    text += " ";
    updateMainInterface(text);

})

const multiplication = document.querySelector('#btn-multiply');
multiplication.addEventListener('click', () => {
    let text = " ";
    text += multiplication.textContent;
    text += " ";
    updateMainInterface(text);

})

const subtraction = document.querySelector('#btn-subtract');
subtraction.addEventListener('click', () => {
    let text = " ";
    text += subtraction.textContent;
    text += " ";
    updateMainInterface(text);

})

const addition = document.querySelector('#btn-add');
addition.addEventListener('click', () => {
    let text = " ";
    text += addition.textContent;
    text += " ";
    updateMainInterface(text);

})

const calculation = document.querySelector('#btn-equals');
calculation.addEventListener('click', () => {
    updateSecondaryInterface();
})



function updateMainInterface(input){
    largeScreen.textContent += input;
};

function updateSecondaryInterface(){
    smallScreen.textContent = largeScreen.textContent;
    clearMainInterface();
}

function clearMainInterface(){
    largeScreen.textContent = "";
}

function clearSecondaryInterface(){
    smallScreen.textContent = "";
}

function deleteLastCharacter() {
    if(largeScreen.textContent.endsWith(" ")){
        largeScreen.textContent = largeScreen.textContent.slice(0, -3);
    }
    else {
        largeScreen.textContent = largeScreen.textContent.slice(0, -1);
    }
}


let firstNumber;
let secondNumber;
let operator;


function operate (a, b, o){
    if(o == '+'){
       return add(a, b);
    }
    else if(o == '-'){
        return subtract(a, b);
    }
    else if(o == '*'){
        return multiply(a, b);
    }
    else if(o == '/'){
        return divide(a, b);
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