//Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(cel) {
    let far;
    far = (cel * (9 / 5)) + 32;
    return far;
}
const cel = 56.9;
const far = celsiusToFahrenheit(cel);
console.log(cel, '° Celsius = ', far.toFixed(2), '°Fahrenheit')