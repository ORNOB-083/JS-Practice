/* 
Create a JavaScript program to calculate the electricity bill based on unit consumption.

#Rules:
First 100 units → 5 tk per unit
Next 100 units (101–200) → 7 tk per unit
Above 200 units → 10 tk per unit

#Conditions:
If total bill is more than 1500 tk, give 10% discount
Otherwise, no discount

#Requirements:
Use nested if–else
Use variables: units, bill
Print the final payable amount 
*/

var unit = 280;
var bill;

if (unit <= 100) {
    console.log(unit * 5)
}
else if (unit >= 100 && unit <= 200) {

    bill = 500 + ((unit - 100) * 7);
    console.log(bill)
    //console.log(bill)
}
else {
    bill = 1200 + ((unit - 200) * 10);
    // console.log(bill)
    if (bill > 1500) {
        bill = ((bill / 100)) * 90;
        console.log(bill)
    }
    else {
        console.log(bill)
    }

}