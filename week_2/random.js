function random() {
    let  a=Number(prompt("Insert the first number"));
    let b=Number(prompt("Insert the second number"));
    let c=Number(prompt("Insert the third number"));
    const sum=a+b+c;
    const mult=a*b*c;
    if (a >= 0&& b>=0 && c >= 0){
        console.log('sum', sum, 'mult', mult);
    }
    else if (a <0&& b<0 && c < 0){
        console.log("only negatives");
    }
    else {
        console.log('sum', sum);
    }
}
random();

