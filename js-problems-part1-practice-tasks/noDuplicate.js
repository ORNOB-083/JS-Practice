function noDuplicate(arr) {
    const arr2 = [];
    for (const num of arr) {
        if (arr2.includes(num) === false) {
            arr2.push(num);
        }
    }
    return arr2;
}




const arr = noDuplicate([1, 5, 61, 5, 87, 7, 5, 81, 61]);

console.log(arr)
