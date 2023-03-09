const form = document.querySelector('form');
// all inputs
const customer = document.querySelector('#name');
const size = document.querySelectorAll('[name="size]');
const toppings = document.querySelector('input[type="checkbox"]');


const order_name = document.querySelector('order_name');
const order_size = document.querySelector('order_size');
const order_price = document.querySelector('#order_price');


const myFunction = () => {
    let customerName = customer.value;
    let sizeResult = '';
    let toppingsResults = [];
    let price = 0;
    let deliveryResult = delivery.options[delivery.selectedIndex];

    size.forEach((item) => {
        if(item.checked) {
            sizeResult =item.value;
            sizeText= `pizza for ${sizeResult};
        }
    });

    switch (sizeResult) {
        case'two':
            price+= 7.5;
            order_size.textContent = sizeText;
        case'four':
            price+= 10.5;
            order_size.textContent = sizeText;
        case'six':
            price+= 12.5;
            order_size.textContent = sizeText;
        case'eight':
            price += 15.5;
            order_size.textContent = sizeText;
    };
    
    toppings.forEach ((item)=> {
        if(item.checked) {
            toppingsResult.push(item.value);
        }
    });
    
    
    order_name.textContent = customerName;
}

form.addEventListener('input', myFunction);