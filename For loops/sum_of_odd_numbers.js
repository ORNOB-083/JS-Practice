/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
*/
/*
Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/


let sum1 = 0;
console.log('Sum of odd numbers from 91 to 129:')
for (let i = 91; i <= 129; i += 2) {
    // console.log(i)
    sum1 += i;
}
console.log(sum1)

let sum2 = 0;
console.log('Sum of odd numbers from 51 to 85:')
for (let i = 52; i <= 85; i += 2) {
    console.log(i)
    sum2 += i;
}
console.log(sum2)