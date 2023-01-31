
const calcGasoline = () => {
    const price = Number(document.getElementById('price').value);
    const money = +document.querySelector('#money').value;

    const answer = document.querySelector('#answer');

    // or const money = Number(document.querySelector('#money').value);

    let text;

    const amount = Math.floor(money/price);

    if (amount>=10) {
        text=`You could get about ${amount} liters, good now you can go`;
    }
    else {
        text= `You could get about ${amount} liters. Sorry you have to stay`;
    }

    answer.textContent =text;

};

const Converter = (id, value) => {

    const celInput =document.querySelector('#cel');


    const farInput = document.querySelector('#far');


    const kelInput = document.querySelector('#kel');

    // farInput.value=celInput.value;


    console.log(id, value);
    const val = parseFloat(value);

    if (id==="cel") {
        farInput.value = (val*1.8+32).toFixed(2);
        kelInput.value = (val + 273.15).toFixed(2);
    }
    if (id=== 'far') {
        celInput.value = ((val-32)/1.8).toFixed(2);
        kelInput.value = ((val - 32)/ 1.8 +273.15).toFixed(2);
    }
    if (id=== 'kel') {
        celInput.value = (val - 273.15).toFixed(2);
        farInput.value=((val - 273.15) * 1.8 + 32).toFixed(2);
    }
    };


// const paragraphs = document.querySelectorAll('p');
// const inputs =document.querySelectorAll('input');

// console.log(paragraphs);

// paragraphs.forEach((paragraph) => {
//     paragraph.textContent = 'Hello world';
// });
// inputs.forEach((input) => {
//     input.value=200;
// });
