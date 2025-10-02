

let convergentsOfE = (n) => { 
    n = BigInt(n)  
    num = 1n, den = 1n, temp = 0n
    if(n == 1n) num = 2n // Breaks early if n = 1
    if(n%3n == 0n) num = (n/3n)*2n // if starting point is at multiples of 2's( index start = 1)
    for(let k = n-1n; k > 1n; k--) { // start from next element and backwards
        temp = num // store current num for next den
        if(k % 3n == 0n) num = (k/3n)*2n*num + den // set the coefficent accordingly
        if (k % 3n !== 0n) num = num + den // set the coefficent accordingly
        den = temp // transfer the previos cylce num to next cycle den
    }
    num = 2n*num + den // to deal with initial '2' and copmlete he process

    // Summing the numbers
    let sum = 0
    let charNum = String(num).split('')
    for(let s of charNum) sum += Number(s)
    return sum
}
    
console.time("Convergent")
console.log(convergentsOfE(10))
console.log(convergentsOfE(30))
console.log(convergentsOfE(50))
console.log(convergentsOfE(70))
console.log(convergentsOfE(100))
console.timeEnd("Convergent")

/*
for( let k = 2; k > 0; k--) {
    temp = num
    num = den
    den = den + temp
    temp = num
    num = den
    den = 2*k*den + temp
    temp = num
    num = den
    den = den + temp
}
temp = num
num = den
den = den * 2 + temp
console.log("num:", num, "den:", den)
*/