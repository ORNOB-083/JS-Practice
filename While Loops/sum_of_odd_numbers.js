/*
Subtask-1:
Display sum of all the odd numbers from 81 to 131.

Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/

let sum1 = 0;
console.log('Sum of odd numbers from 91 to 129:')
let i = 91;
while (i <= 129) {
    // console.log(i)
    sum1 += i;
    i += 2;
}
console.log(sum1)


let sum2 = 0;
console.log('Sum of even numbers from 51 to 85:')
let j = 52;
while (j <= 85) {
    // console.log(j)
    sum2 += j;
    j += 2;
}
console.log(sum2)