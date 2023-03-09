function salary_calculator() {

let work_hours=Number(prompt("Enter your hours in numbers"));
let salary;
const extra_hours=work_hours-7;
let hour_rate=Number(prompt("enter you hourly rate in numbers"));

    if (work_hours<=7){
        salary=work_hours*hour_rate;
    }
    else if (9>=work_hours>7){
        salary=work_hours*hour_rate+extra_hours*hour_rate/2;
    }
    else{
        salary=work_hours*hour_rate+extra_hours*(hour_rate*2);
    }

    console.log("Your salary for today is", salary)
    }

salary_calculator();