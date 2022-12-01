const guessValue = document.getElementById('value');
const guessButton = document.getElementById('guessButton');
const guessNumberSpan = document.getElementById('guessNumber');
const tryValue = document.getElementById('tryValue');
const result = document.getElementById('result');

let randomNumber = Math.floor(Math.random() * 15);
let tryValueNumber = 1;
console.log(randomNumber);

guessButton.addEventListener('click', function(){
    if(guessValue.value < randomNumber) {
        result.innerText = "Your guess is few"
    } else if (guessValue.value > randomNumber) {
        result.innerText = "Your guess is High"
    } else if (guessValue.value == randomNumber){
        result.innerText = "Winner"
        guessNumberSpan.innerText = guessValue.value;
        tryValue.innerText = tryValueNumber;
    }
    tryValueNumber++
    if(guessValue.value < 0 || guessValue.value > 15) {
        guessValue.value = 0
        alert('Zehmet olmasa 1 ile 15 arasinda secin')
    } 
})



