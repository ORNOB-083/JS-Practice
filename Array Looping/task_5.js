/* 
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3]
 */

const arr = [1, 2, 3];
console.log('Original: ' ,arr)
const arr2 = arr.slice();

// console.log(arr2)
arr2[0]=99;
console.log('Copy: ' ,arr2)
