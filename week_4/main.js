
function Calculator (a, b) {
    result = a*b;
    return console.log ('You could get about', result, 'liters, good, now you can escape');
}

const price = document.getElementById ('price').value;

const money = document.getElementById ('money').value;

button.addEventListener("click", Calculator(price, money));

const answer = document.querySelector('#answer');

answer.textContent = Calculator(price, money);