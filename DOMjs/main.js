const backButton = document.querySelector("#backToTop");

const header = document.querySelector('header');

const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const modalButton = document.querySelector('#modalButton');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('#closeButton');


window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = "block";
      header.classList.add('bg');
    //   header.style.backgroundColor = "grey";
    //   header.style.color = '#333';
    //   header.style.padding = '0';
    } else {
      backButton.style.display = "none";
      header.classList.remove('bg');
    //   header.style.backgroundColor = 'rgba(145, 125, 149, 0.674)';
    //   header.style.padding = '0';
    }

    // another way of writing the same thing
    // condition ? true : false
    
    // document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? backButton.style.display = "block":
    // backButton.style.display = "none";
};

const getToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


const mobMenu = () => {

    for (const link of menuItems) {
        link.addEventListener('click', mobMenu)
    }

    if(nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}
// check if the function works
// const getToTop = () => {
//     console.log("back")
// };

const modalShow = () => {
    overlay.classList.toggle('visible');
}

backButton.addEventListener('click', getToTop)

mobButton.addEventListener('click', mobMenu)

modalButton.addEventListener('click', modalShow)

closeButton.addEventListener('click', modalShow)

window.onscroll = function() {scrollFunction()};
