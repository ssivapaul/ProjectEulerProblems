
import BigNumber  from "bignumber.js"

let sqrtDigitalExpansion = (n) =>{
    //Helper function
    let heronSqrt = (num) => {
        let f = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
        let N = num*f, xCurr = N/2n, xPrev = 0n
        while(xPrev !== xCurr) {
            xPrev = xCurr
            xCurr = (xPrev + N/xPrev)/2n
        }
        let sR = String(xCurr).slice(0, 100)
        let sum = 0
        for(let d of sR) sum += Number(d)
        return sum
    }
    //----------------------------------------
    //Main routine
    let sumF = 0
    for(let i = 2; i <= n; i++) {
        let sq = Math.floor(Math.sqrt(i))
        if(sq == Math.sqrt(i)) continue
        sumF += heronSqrt(BigInt(i))
    }
    return sumF
}

console.time("SquareRoot")
console.log(sqrtDigitalExpansion(2)) // Output: 475, Expected: 475, 
console.log(sqrtDigitalExpansion(50)) // Output: 19543, Expected: 19543
console.log(sqrtDigitalExpansion(100)) // Output: 40886, Expected: 40886
console.timeEnd("SquareRoot")
