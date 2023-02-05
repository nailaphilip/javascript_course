const Pizza = (e) => {
    e.preventDefault();

    const user_name = document.querySelector('#name').value;

    const size = document.querySelector('#size').value;
    
    const topping = document.querySelector('#topping').value;

    const answer = document.querySelector('#answer');

    let text;

    // or const money = Number(document.querySelector('#money').value);

    // let text;

    // const amount = Math.floor(money/price);

    // if (amount>=10) {
    //     text=`You could get about ${amount} liters, good now you can go`;
    // }
    // else {
    //     text= `You could get about ${amount} liters. Sorry you have to stay`;
    // }

    // answer.textContent =text;
    text=`Your name is $user_name`;
    answer.textContent = text;
    console.log(user_name);
};

