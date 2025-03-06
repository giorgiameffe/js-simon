
// Html elements

const countdownDiv = document.getElementById('countdown');
console.log(countdownDiv);



// Countdown

let count = 10;
let countDown2 = setInterval(countDown,1000);

function countDown () {

    countdownDiv.innerHTML = count;
    count--;

    if (count === -1) {
        clearInterval(countDown2);
    }
        
}




