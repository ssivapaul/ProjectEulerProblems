

let countingFractionsInARange = (limit) => {
    let gcd = (a, b) => {
        while(b !== 0) { let t = b; b = a % b;  a = t }
        return a
    }
    //Main routine
    let count = 0
    for(let d = limit; d > 1; d--) {
        for(let n = d - 1; n > 0; n--) {
            if(n < d/2 && n > d/3 && gcd(n, d) == 1) count++
        }
    }
    return count
}


console.time("CFIRange")
console.log(countingFractionsInARange(8))
console.timeEnd("CFIRange")
console.time("CFIRange")
console.log(countingFractionsInARange(1000))
console.timeEnd("CFIRange")
console.time("CFIRange")
console.log(countingFractionsInARange(6000))
console.timeEnd("CFIRange")
console.time("CFIRange")
console.log(countingFractionsInARange(12000))
console.timeEnd("CFIRange")