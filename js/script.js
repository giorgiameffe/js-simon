
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

    // creazione array per numeri random

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

for (i = 0; i < cpuNumbers.length; i++) {

    currentNumber = cpuNumbers[i];
    // creare lista html
    const listElement = document.createElement('li');
    listElement.innerHTML = currentNumber;
    numberList.appendChild(listElement);
}

// evento scatenante il click del bottone

answerForm.addEventListener ("submit", function(event) {

    event.preventDefault();

    // creazione array per numeri utente

    const userNumbers = [];
    const inputElements = document.querySelectorAll('input');

    for (let i = 0; i < inputElements.length; i++) {
        
        const inputNumberElement = parseInt(inputElements[i].value);
        userNumbers.push(inputNumberElement);
        console.log(userNumbers);
    }

})



















