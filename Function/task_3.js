/* 
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(average) {
    let sum = 0;
    let avg = 0;
    for (const num of average) {
        sum += num;
    }
    avg = sum / average.length;
    return avg;
}

const result = make_avg([9, 35, 7, 15, 25]);
console.log('Final Result: ', result)