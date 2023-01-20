let work_hours=prompt("Enter your hours");
let salary;
const extra_hours=work_hours-7;
let hour_rate;

if (work_hours<=7){
    salary=work_hours*hour_rate;
}
else if (9>=work_hours>7){
    salary=work_hours*hour_rate+extra_hours*hour_rate/2;
}
else{
    salary=work_hours*hour_rate+extra_hours*(hour_rate*2);
}
