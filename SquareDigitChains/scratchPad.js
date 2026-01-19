

let squareDigitTrain = (limit) => {
    let count = 0
    for(let n = 2; n <= limit; n++) {
        let m = String(n)
        while(true) {
            let sum = 0
            for(let i = 0; i < m.length; i++) sum += m[i]**2
            if(sum == 89 || sum == 1) {
                if(sum == 89) count++
                break
            }
            m = String(sum)
        }
    }
    return count
}

/*
console.time("SquareDigitChain")
console.log(squareDigitTrain(10000000))
console.timeEnd("SquareDigitChain")
*/

console.time("SquareDigitChain")
console.log(squareDigitTrain(100))
console.log(squareDigitTrain(1000))
console.log(squareDigitTrain(100000))
console.log(squareDigitTrain(10000000))
console.timeEnd("SquareDigitChain")
