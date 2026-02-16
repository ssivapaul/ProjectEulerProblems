
let base = 2
let mult = 19
//let exp = 7830457
let exp = 6833086
//let exp = 20
let mod = 10**10
let modExp = (mul, exp) => {
    let base = 2
    let mod = 10**10
    let result = mul
    base = base % mod
    while (exp > 0) {
        if (exp & 1) result = (result * base) % mod // exp & 1 => exp % 2 === 1
        exp = exp >> 1 // exp = exp // 2 
        base = (base * base) % mod
        //console.log("base:", base, "result:", result)
    }
    result += 1
    //result %= 10**10
    result = result.toString().padStart(10, '0');
    return result
}

//let solMod = (mult, exp) => {
//    return (mult * 2**exp + 1) % 10**10
//}

console.time("LargeNon")
console.log(modExp(19, 6833086))
console.log(modExp(27, 7046834))
console.log(modExp(6679881, 6679881))
console.log(modExp(28433, 7830457))
console.timeEnd("LargeNon")

/*
Tests
Waiting:1. largeNonMersennePrime(19, 6833086) should return a string.
Waiting:2. largeNonMersennePrime(19, 6833086) should return the string 3637590017.
Waiting:3. largeNonMersennePrime(27, 7046834) should return the string 0130771969.
Waiting:4. largeNonMersennePrime(6679881, 6679881) should return the string 4455386113.
Waiting:5. largeNonMersennePrime(28433, 7830457) should return the string 8739992577.
*/