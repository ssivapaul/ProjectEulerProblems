
function bigIntPow(base, exp) {
    let result = 1n;
    while (exp > 0n) {
        if (exp % 2n === 1n) result *= base;
        base *= base;
        exp /= 2n;
        console.log(result, base, exp)
        console.log("----------")
    }
    return result;
}

bigIntPow(10n, 3n)
/*
function bigIntPow(base, exp) {
    let result = 1n;
    while (exp > 0n) {
        result *= base
        exp--
    }
    return result;
}

let sum = 0n;
for (let i = 1n; i <= 10n; i++) {
    sum += bigIntPow(i, i);
}


console.log(sum)
//console.log(String(sum).slice(-6)); // Accurate last 6 digits
*/