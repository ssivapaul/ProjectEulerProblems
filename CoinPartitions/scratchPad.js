


let coinPartitions = (divisor) => {
    // P(n) = P(n - 1) + P(n - 2) - P(n - 5) - P(n - 7) + ... + (-1)^(k+1)P(n - gk) + (-1)^(k+1)P(n - g -k) 
    // gk = k(3k - 1)/2
    // g -k = k(3k + 1)/2
    let P = [1n]
    for(let n = 1; ; n++) {
        let Pn = 0n
        for(let k = 1; ; k++) {
            let sign = k % 2 == 1 ? 1n : -1n
            let g1 = k*(3*k - 1) >> 1
            if(n < g1) break
            Pn += sign*P[n - g1]
            let g2 = k*(3*k + 1) >> 1
            if(n < g2) continue
            Pn += sign*P[n - g2]
        }
        if(Pn % BigInt(divisor) == 0) return P.length
        P[n] = Pn
    }
    return 0
}


console.time("coinPartitions")
//console.log(coinPartitions(7))
//console.log(coinPartitions(10000)) // 599, 7.341ms
console.log(coinPartitions(100000)) // 11224, 115.253ms
//console.log(coinPartitions(1000000)) // 55374,  1.640s
console.timeEnd("coinPartitions") //
