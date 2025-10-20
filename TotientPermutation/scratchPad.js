
let totientPermutation = (limit) => {
    // Helper funtion
    let totientS = (limit) => {
        let phi = [...new Array(limit + 1)].map((_, i) => i );
        for (let p = 2; p <= limit; p++) {
            if(phi[p] == p) { // ensures p is prime
                for (let k = p; k <= limit; k += p) phi[k] -= phi[k] / p; 
            }
        }
        return phi;
    }

    let tot = totientS(limit)
    let tPerm = []
    for(let i = 2; i < tot.length; i++) {
        let sT = String(tot[i]), iT = String(i)
        //if(sT.length !== iT.length) continue
        if( sT.split('').sort().join('') == iT.split('').sort().join('')) tPerm.push([i, (i/tot[i])])
    }
    
    let tMin = Infinity, tP = 0
    for(let i = 0; i < tPerm.length; i++) {
        if(tPerm[i][1] < tMin) {
            tMin = tPerm[i][1]
            tP = tPerm[i][0]
        }
    }
    return tP
}

console.time("totientPermutation")
console.log(totientPermutation(10000)) // 4435
console.log(totientPermutation(100000)) // 75841
console.log(totientPermutation(500000)) // 474883
console.log(totientPermutation(10000000)) // 8319823
console.timeEnd("totientPermutation")