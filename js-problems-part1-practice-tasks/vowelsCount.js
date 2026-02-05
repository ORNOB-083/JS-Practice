/* 
Write a function to count the number of vowels in a string.
 */

function countVowels(vowels) {
    let count = 0;
    for (const val of vowels) {
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' || val === 'A' || val === 'E' || val === 'I' || val === 'O' || val === 'U') {
            count++;
        }
    }
    return count;
}
const res = countVowels('jfgjhresuyosfdhU');
console.log(res)

console.log('---------------')

const res1 = countVowels('aOsreyhBEretoyfdfjre');
console.log(res1)

console.log('---------------')
//with keyword
function countVowels2(vowel) {
    let count = 0;
    for (const val of vowel) {
        if (vowels.includes(val))
            count++;
    }
    return count;
}
const res3 = countVowels('jfgjhresuyosfdhU');
console.log(res3)

console.log('---------------')

const res4 = countVowels('aOsreyhBEretoyfdfjre');
console.log(res4)