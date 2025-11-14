
import BigNumber  from "bignumber.js";
function sqrtDigitalExpansion  (n) {
    let bigNumSqrt = (num) => {
        BigNumber.config({ DECIMAL_PLACES: 130 }); 
        const number = new BigNumber(num); 
        const squareRoot = number.sqrt();
        let sR = String(squareRoot).split('.')
        let sRR = sR[0].concat(sR[1]).slice(0, 100)
        let sum = 0
        for(let s of sRR.split('')) sum += Number(s)  
        return sum
    }
    let sumF = 0
    for(let i = 2; i <= n; i++) {
        let sq = Math.floor(Math.sqrt(i))
        if(sq == Math.sqrt(i)) continue
        sumF += bigNumSqrt(i)
    }
    return sumF
}

console.time("SquareRoot")
console.log(sqrtDigitalExpansion(2)) // Output: 481, Expected: 475, 
console.log(sqrtDigitalExpansion(50)) // Output: 19568, Expected: 19543
console.log(sqrtDigitalExpansion(100)) // Output: 40727, Expected: 40886
console.timeEnd("SquareRoot")
