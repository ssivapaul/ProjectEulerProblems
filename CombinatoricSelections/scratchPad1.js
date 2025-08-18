
function combinatoricSelections(limit) { 
    let count = 0;
    for (let n = 1; n <= 100; n++) {
        let c = 1;    // nC0
        let r = 0;
        while (c < limit && r < n) {
            c = c * (n - r) / (r + 1);
            r++;
        }
        if (r <= n) {
            count += n + 1 - 2 * r; // symmetry
        }
    }
    return count;
}

console.log(combinatoricSelections(1000));     // 4626 
console.log(combinatoricSelections(10000));    // 4431 
console.log(combinatoricSelections(100000));   // 4255 
console.log(combinatoricSelections(1000000));  // 4075 
/*
console.log(combinatoricSelections(1000));     // 4560 
console.log(combinatoricSelections(10000));    // 4326 
console.log(combinatoricSelections(100000));   // 4084 
console.log(combinatoricSelections(1000000));  // 43844 
*/