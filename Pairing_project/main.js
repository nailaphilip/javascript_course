const form = document.querySelector('form')
const customerName = document.querySelector("#nameCustomer");
const user_name = document.querySelector("#namePrint");

const size = document.querySelectorAll('[name="size"]');


function orderPizza(){
    console.log(customerName.value);
    console.log(size);

    size.forEach(item=>{if (item.checked)
    {
        console.log(item.value);
        choice_size=item.value;
        let price;
        if (choice_size = 2) {
            price = 7.50;
        else if (choice_size = 4) {
            price = 10.50;
        }
        else if (choice_size = 6) {
            price = 12.50;
        }
        else {
            price= 15.50
        }
    })

    let text;

    text = `Your name is : ${customerName.value}, choice ${choice_size}`;
    user_name.textContent = text;

    // let price;
    // if (size =='#2') {
    //     price = 7.50
    //     console.log(price)
    // }

    // text = `and price ${price}`
    // user_name.textContent = text;

};

form.addEventListener("input", orderPizza);
