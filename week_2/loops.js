// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let number=1; number<=100; number++) {
    if (number%2==1){
    console.log(number);
    }
}

// another solution

let answer= '';
let end = 98;

for (let number=2; number<100; number+=2) {
    answer += ' ' + number + ' ';
    answer += ' ' + end + ' ';
    end-=2;
}

console.log(answer);

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

for (let number=0; number<=98; number++) {
    if (number%2==0){
    console.log(number+2);
    }
}

// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let user_distance;
let user_time;

while (user_distance!=0) {
    user_distance=Number(prompt("Please, enter the distance"));

    if(user_distance==0) {
        console.log('distance 0 - game over');
        break; 
    }

    user_time=Number(prompt("Please, enter your time"));
    let speed=user_distance/user_time;
    console.log("Your speed is", speed)
}

// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let user_number;
let count=0;
let even_count=0;

 while (count!=20) {
    user_number=Number(prompt("Enter a number"));
    count++;
    if (count==20) {
        console.log("You have entered 20 numbers - game over");
        console.log("The number of even numbers is", even_count);
        break;
    }
    if (user_number%2==0) {
        even_count++;
    }

 }

//  let even =0;

//  for(let b=0; b<5; b++) {
//     let input = Number(prompt('Enter a number'));

//     if (input%2==0) {
//         even++;
//     }
//  }

//  console.log('There was', even, 'even numbers');


//  Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// let i;
// let sum=0;
// let counter=0;

// while (i!=0) {
//     i=Number(prompt("Enter your number"));
//     if(i==0) {
//         console.log('number is 0 - game over.');
//         break;
//     }    
//     sum=sum+i;
//     counter=counter+1;
//     average=sum/counter;
//     console.log('sum is', sum, 'average is', average);
// }

let input;
let sum = 0;
let count = 0;

while (input !=0) {
    input = Number(prompt('enter a number'));
    if (input==0){
        console.log('0 input');
        break;
    }
    sum+= input;
    count++
}

let average = sum/count;
console.log(sum);
console.log(count);
console.log(average);

// Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let x;
let times=0;
let summa=0;

 while (times!=25) {
    x=Number(prompt("Enter a number"));
    times++;
    summa=summa+x;
    average_1=summa/times;
    if (times==25) {
        console.log("You have entered 25 numbers - game over");
        console.log("The average of the numbers is", average_1);
        break;
    }
}

// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let a;
let sum_a=0;
let avrg_a=0;
let aika=1;
let user_response='';
const first_number = Number(prompt('Please enter the first number'));

while (user_response!='n'){
    user_response=prompt('Do you want to continue giving numbers? (y/n)');
    if (user_response=='n') {
        console.log('Your response is n - programm ends');
        console.log('Average of the numbers is', avrg_a);
        break;
    }
    a=Number(prompt('Please enter a number'));
    sum_a=sum_a+a+first_number
    aika=aika+1
    avrg_a=sum_a/aika
}
// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let n_numbers=Number(prompt('How many numbers do you want to give?'));
let numbers=Number(prompt('Please give your numbers'));
let smallest=0;

for(let b=0; b<=n_numbers; b++) {
    if (b < b) {
        smallest = b;
    }

    
 }

console.log('The smallest number you gave is', smallest)