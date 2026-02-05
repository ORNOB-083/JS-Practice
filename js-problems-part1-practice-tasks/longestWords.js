/* 
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWords(words) {
    let longest = '';
    const wordArray = words.split(' ');
    for (const wor of wordArray) {
        if (wor.length > longest.length) {
            longest = wor;
        }
    }
    return longest;
}

const res = longestWords('I am learning Programming to become a programmer');
console.log(res)