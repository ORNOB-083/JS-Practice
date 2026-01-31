/* 
Loop through an object and print the key-value pairs with their types

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
keys = Object.keys(myObject);
for (let i = 0; i < keys.length; i++) {
    console.log('Key: ' + keys[i] + ' | type: ' + typeof myObject[keys[i]])
}