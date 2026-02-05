/* 
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function repeatedNumberCount(numbers, find) {
    let count = 0;
    for (const val of numbers) {
        if (find === val) {
            count++;
        }
    }
    return count;
}
const res = repeatedNumberCount([5, 6, 11, 12, 98, 5], 5);
console.log(res)

const res1 = repeatedNumberCount([5, 6, 11, 12, 98, 5], 25);
console.log(res1)
