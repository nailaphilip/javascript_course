
const myForm =document.querySelector('#my-form');
const user_name = document.querySelector('#name');
const size = document.querySelectorAll('input[type="radio"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery =document.querySelector('#delivery');
const order_name = document.querySelector('#order_name');
const order_size = document.querySelector('#order_size');
const order_toppings =document.querySelector('#order_toppings');
const order_delivery = document.querySelector('#order_delivery');


    let pizzaSize;
    let pizzaToppins;
    let pizzaDeliver;
    let price;

myForm.addEventListener('input', onInput);


function onInput(e) {
    let userName = user_name.value;
    order_name.textContent = userName;

    let sizeResult;
    let sizeText = '';
    size.forEach((item) => {
        if (item.checked) {
          sizeResult = item.value;
          sizeText = `  pizza for ${sizeResult}`;
        }
      });




    order_name.textContent = userName;
    order_size.textContent = sizeText;

}
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// });

