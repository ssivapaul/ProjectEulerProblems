
function productSumNumbers(limit) {
    let kMax = limit + 1
    let minProd = new Array(kMax).fill(2*kMax)
    let findProductSum = (p, t, c, s, kMax) => {
        let k = p - t + c
        if(k < kMax) {
            let minP = min(minProd[k], p)
            minProd[k] = Number(minP)
            let Limit = Math.floor(kMax/p)*2 + 1
            for(let i = s; i < Limit; i++ ) {  
                findProductSum(p*i, (t + i), (c + 1), i, kMax)
            }
        }
        return minProd
    }

    let minP = findProductSum(1, 1, 1, 2, kMax)
    let sminP = new Set(minP.slice(2))
    let sum = sminP.values().reduce((a, c) =>  a + c)
    return sum
}

console.time("ProductSum")
console.log(productSumNumbers(6)) //should return 30.
console.log(productSumNumbers(12)) //should return 61.
console.log(productSumNumbers(300)) //should return 12686.
console.log(productSumNumbers(6000)) //should return 2125990.
console.log(productSumNumbers(12000)) //should return 7587457.
console.timeEnd("ProductSum")
/*
k=2: 4=2×2=2+2
k=3: 6=1×2×3=1+2+3 
k=4: 8=1×1×2×4=1+1+2+4
k=5: 8=1×1×2×2×2=1+1+2+2+2
k=6: 12=1×1×1×1×2×6=1+1+1+1+2+6
*/