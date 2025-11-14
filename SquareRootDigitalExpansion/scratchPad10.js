import BigNumber  from "bignumber.js"

let sqrtDigitalExpansion = (n) =>{
    //Helper function
    let heronSqrt = (num) => {
        let f = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
        let N = num*f
        let xCurr = N/2n;
        let xPrev = 0n
        while(xPrev !== xCurr) {
            xPrev = xCurr
            xCurr = (xPrev + N/xPrev)/2n
        }
        let sR = String(xCurr).slice(0, 100)
        let sum = 0
        for(let d of sR) {
            sum += Number(d)
        }
        return sum
    }
    //----------------------------------------
    // Find the integer part using binary search
    let  bigIntSqrt = (n, precision = 0) => {
        let low = 0n;
        let high = n;
        let result = 0n;
    // Find the integer part using binary search
        while (low <= high) {
            let mid = (high + low) / 2n;
            if (mid * mid === n) return mid;
            if (mid * mid < n) {
                result = mid;
                low = mid + 1n;
            }
            if (mid * mid > n) high = mid - 1n;
        }
        return result;
    }

    let isPerfectSquareBig = (n) => {
        const root = bigIntSqrt(n);
        return root * root === n;
    }
    let sumF = 0
    for(let i = 2n; i <= BigInt(n); i++) {
        if(isPerfectSquareBig(i)) continue
        sumF += heronSqrt(i)
    }
    return sumF
}

console.time("SquareRoot")
console.log(sqrtDigitalExpansion(2)) // Output: 475, Expected: 475, 
console.log(sqrtDigitalExpansion(50)) // Output: 19543, Expected: 19543
console.log(sqrtDigitalExpansion(100)) // Output: 40886, Expected: 40886
console.timeEnd("SquareRoot")
