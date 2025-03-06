
// Elementi HTML

// Countdown
const countdownDiv = document.getElementById('countdown');
console.log(countdownDiv);

// Instructions
const instructionsElement = document.getElementById('instructions');
console.log(instructionsElement);

// List
const numberList = document.getElementById('numbers-list');

// Form
const answerForm = document.getElementById('answers-form');

// Inputs
const inputElements = document.querySelectorAll('input');

// Button
const buttonElement = document.querySelector('button');

// creare una funzione per gestire il countdown
// inserire cambiamenti al termine del countdown

let count = 10;
let countdownElement = setInterval(countDown,1_000);

function countDown () {

    countdownDiv.innerHTML = count;
    count--;

    if (count === -1) {
        clearInterval(countdownElement);
        instructionsElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)";
        answerForm.classList.remove('d-none');
        numberList.classList.add('d-none');
    }       
}

// funzione per generare numeri randomici per il computer

function generateRandomNumbers (min, max) {

    const randomArray = [];
    const arrayLength = 5;
    for (let i = 0; i < arrayLength; i++) {
        const randomNum =  Math.ceil((Math.random() * max - min) + min);
        randomArray.push(randomNum);
    }

    return randomArray;
}

const cpuNumbers = generateRandomNumbers(1, 50);
console.log(cpuNumbers);

// iterare array per generare numeri singoli
// creare lista html

for (i = 0; i < cpuNumbers.length; i++) {

    currentNumber = cpuNumbers[i];
    console.log(currentNumber);
    const listElement = document.createElement('li');
    listElement.innerHTML = currentNumber;
    numberList.appendChild(listElement);
}














