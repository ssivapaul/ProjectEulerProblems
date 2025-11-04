

let coinPartitions = (divisor) => {
    let P = []
    for(let j = 99999; j <= 100000; j++) {
        let cP = new Array(j + 1).fill(0n)
        cP[0] = 1n
        for(let p = 1; p < j + 1; p++) {
            for(let i = p; i < j + 1; i++) {
                cP[i] += cP[i - p]
            }
        }
        P.push([...cP.splice(cP.length - 1), j])
    }
    console.log(P)
    for(let i = 0; i < P.length - 1; i++) {
        if(P[i][0] % BigInt(divisor) == 0) return P[i][1]
    }
   
    return 0
}

console.time("coinPartitions")
//console.log(coinPartitions(7))
//console.log(coinPartitions(10000)) // 599
console.log(coinPartitions(100000)) // 11224
//console.log(coinPartitions(1000000))
console.timeEnd("coinPartitions")
