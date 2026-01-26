/* 
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

const A = [1, 2, 3, 4, 5];
const B = 5;
const C = 'string';

if (A) {
    if (Array.isArray(A)) {
        console.log('A is an array')
    }
    else {
        console.log('A is not an array')
    }
}
if (B) {
    if (Array.isArray(B)) {
        console.log('B is an array')
    }
    else {
        console.log('B is not an array')
    }
}
if (C) {
    if (Array.isArray(C)) {
        console.log('C is an array')
    }
    else {
        console.log('C is not an array')
    }
}