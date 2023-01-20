let user_age=prompt("Enter your age");

if(user_age<18){
    console.log(`too young`);
}
else if(user_age<27){
    console.log('Right age for military service');
}
else if(user_age<41){
    console.log('You are in reserve');
}
else if(user_age<45){
    console.log('You are in backup reserve');
}
else{
    console.log('too old');
}
