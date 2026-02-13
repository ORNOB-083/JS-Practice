/* 
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let final = heights2[0];

for (const name of heights2) {
    if (name.length < final.length) {
        final = name;
    }
}
console.log(final)