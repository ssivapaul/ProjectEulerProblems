

function combinatoricSelections(limit) {
    let count = 0;

    for (let n = 1; n <= 100; n++) {
        // Quick check: if the largest value in this row < limit, skip
        let mid = Math.floor(n / 2);
        let c = 1;
        for (let r = 1; r <= mid; r++) {
            c = c * (n - r + 1) / r;
        }
        if (c < limit) continue; // whole row too small

        // Otherwise, count normally
        let comb = 1;
        let r = 0;
        while (comb < limit && r < n) {
            comb = comb * (n - r) / (r + 1);
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
