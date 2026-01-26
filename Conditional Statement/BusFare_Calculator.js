/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/




var fare = 800;
var age = 91;
// var jatri='Children';
var Students = true;
// var Students = false;

if (age < 10) {
    console.log('No Ticket')
}
else if (Students==true) {
    console.log((fare / 100) * 50)
}
else if (age >= 60) {
    console.log((fare / 100) * 85)
}
else {
    console.log(fare)
}