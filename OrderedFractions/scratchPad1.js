


let orderedFractions = (limit) => {
    let gcd = (a, b) => {
        while(b !== 0) { let t = b; b = a % b;  a = t }
        return a
    }

    let num = 0
    let max = 0
    let n = 0
    for(let d = limit; d > 4; d--) {
        if(3 * d / 7 !== Math.floor(3 * d / 7)) {
            n = Math.floor(3 * d / 7)
            if(n/d > max && gcd(n, d) == 1) {
                max = n/d
                num = n
            }
        }
    }
    return num

}
console.time("OrderFraction")
console.log(orderedFractions(8)) // 2
console.log(orderedFractions(10)) // 2
console.log(orderedFractions(9994)) // 4283
console.log(orderedFractions(500000)) // 214283
console.log(orderedFractions(1000000)) // 428570
console.timeEnd("OrderFraction")