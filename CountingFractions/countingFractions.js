let countingFractions = (limit) => {
    // Helper funtion
    let totientS = (limit) => {
        let phi = [...new Array(limit + 1)].map((_, i) => i );
        for (let p = 2; p <= limit; p++) {
            if(phi[p] == p) { // ensures p is prime
                for (let k = p; k <= limit; k += p) phi[k] -= phi[k] / p; 
            }
        }
        phi = phi.slice(2)
        return phi;
    }

    let fraCountAr = totientS(limit)
    let count = fraCountAr.reduce((acc, cur) => (acc + cur), 0)
    return count
}

console.time("CountFrac")
console.log(countingFractions(8))
console.log(countingFractions(20000))
console.log(countingFractions(500000))
console.log(countingFractions(1000000))
console.timeEnd("CountFrac")

/*
let count = 0
for(let d = limit; d > 1; d--) {
    for(let n = d - 1; n > 0; n--) {
        if(gcd(n, d) == 1) count++
    }
}
*/
