/* 
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:
'person working hard a am I'
 */

const statement = 'I am a hard working person'
let res = '';
const word = statement.split(' ');

for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    res = letter + ' ' + res;
}
console.log(res)

