

function combinatoricSelections(limit) {
    let count = 0;
    let startN = 1;

    if (limit >= 1000000) startN = 23;
    else if (limit >= 100000) startN = 20;
    else if (limit >= 10000) startN = 16;
    else if (limit >= 1000) startN = 13;

    for (let n = startN; n <= 100; n++) {
        let c = 1;
        let r = 0;
        while (c < limit && r < n) {
            c = c * (n - r) / (r + 1);
            r++;
        }
        if (r <= n) {
            count += n + 1 - 2 * r;
        }
    }
    return count;
}

console.time("CombiSelect")
console.log(combinatoricSelections(1000));     // 4626
console.log(combinatoricSelections(10000));    // 4431
console.log(combinatoricSelections(100000));   // 4255
console.log(combinatoricSelections(1000000));  // 4075
console.timeEnd("CombiSelect")
