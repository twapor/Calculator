
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
    operate();
    

})



function updateMainInterface(input) {
    largeScreen.textContent += input;
};

function updateSecondaryInterface() {
    smallScreen.textContent = largeScreen.textContent;
    
}

function clearMainInterface() { 
    largeScreen.textContent = "";
}

function clearSecondaryInterface() {
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

function createOperableArrays() {
    let str = largeScreen.textContent;
    let arrayStr = str.split(" ");
    let arrayTempNum = arrayStr.map(str => {
        return parseFloat(str);
    });
    let arrayIndex = findIndexOfNan(arrayTempNum);
    const arrayNum = arrayTempNum.filter(function (value) {
        return !Number.isNaN(value);
    });
    const arrayOperator = [];
    for(let i = 0; i < arrayIndex.length; i++){
        arrayOperator.push(arrayStr.at(arrayIndex.at(i)));
    };
    let object = {
        numbers: arrayNum,
        operators: arrayOperator
    }
    return object;
}

function findIndexOfNan(array) {
    return array.map(function(el, i){
        if(isNaN(el)) 
          return i;
        return false;
    }).filter(function(el){
        return el;
    });
}

function operate() {
    let object = createOperableArrays();
    const arrayOperator = object.operators;
    const arrayNum = object.numbers;
    let j = 0;
    let calcVal = 0;
    for(let i=0; i < arrayNum.length;){
        if(j < arrayOperator.length){
            if(i < 1){
                if(arrayOperator[j] == '+'){
                    calcVal = add(arrayNum[i], arrayNum[i+1]);
                    i +=2;
                    j++;
                }
                else if (arrayOperator[j] == '-'){
                    calcVal = subtract(arrayNum[i], arrayNum[i+1]);
                    i +=2;
                    j++;
                }
                else if (arrayOperator[j] == 'x'){
                    calcVal = multiply(arrayNum[i], arrayNum[i+1]);
                    i +=2;
                    j++;
                }
                else if (arrayOperator[j] == '/'){
                    if(arrayNum[i+1] === 0){
                        largeScreen.textContent= 'Cannot divide with zero!'
                        break;
                    }
                    else {
                        calcVal = divide(arrayNum[i], arrayNum[i+1]);
                        i +=2;
                        j++; 
                    }
                }
            }
            else {
                if(arrayOperator[j] == '+'){
                    calcVal = add(calcVal, arrayNum[i]);
                    i++;
                    j++
                }
                else if (arrayOperator[j] == '-'){
                    calcVal = subtract(calcVal, arrayNum[i]);
                    i++;
                    j++;
                }
                else if (arrayOperator[j] == 'x'){
                    calcVal = multiply(calcVal, arrayNum[i]);
                    i++;
                    j++;
                }
                else if (arrayOperator[j] == '/'){
                    if(arrayNum[i] === 0){
                        largeScreen.textContent= 'Cannot divide with zero!'
                        break;
                    }
                    else {
                        calcVal = divide(calcVal, arrayNum[i]);
                        i++;
                        j++;
                    }
                }
            }
        }
        else {
            console.log('calculation finished');
            i++;
        }

        largeScreen.textContent = calcVal;
    }
}
 



let firstNumber;
let secondNumber;
let operator;

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