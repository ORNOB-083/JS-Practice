/* 
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function numCheck(num) {
    if (num % 2 === 0) {
        const res = num / 2;
        return res;
    }
    const res = num * 2;
    return res;
}

const res1 = numCheck(20);
const res2 = numCheck(21);

console.log('-----------For Even Number---------')
console.log(res1)
console.log('-----------For Odd Number---------')
console.log(res2) 