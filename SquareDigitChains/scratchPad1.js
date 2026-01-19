
let squareDigitTrain = (limit) => {
    let merge = (s1, s2) => {
        for(let el of s2) s1.add(el)
            return s1
    }
    let count = 0
    //let set89 = new Set()
    for(let n = 2; n <= limit; n++) {
        let m = String(n)
        //let tempSet = new Set()
        while(true) {
            let sum = 0
            for(let i = 0; i < m.length; i++) {
                sum += m[i]**2
            }
            //tempSet.add(sum)
            if(sum == 89) {
                //et89 = merge(set89, tempSet)
                //console.log(n, set89)
                count++
                break
            }
            //if(set89.has(sum)) {
                //console.log(n, "found at", tempSet, sum)
            //    count++
            //    break
            //}
            if(sum == 1) break
            m = String(sum)
        }
        //console.log("s89",n, set89)
        
    }
    return count
}

console.time("SquareDigitChain")
console.log(squareDigitTrain(10000000))
console.timeEnd("SquareDigitChain")

/*
console.time("SquareDigitChain")
console.log(squareDigitTrain(100))
console.log(squareDigitTrain(1000))
console.log(squareDigitTrain(100000))
console.log(squareDigitTrain(10000000))
console.timeEnd("SquareDigitChain")
*/