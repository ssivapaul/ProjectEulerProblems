
let powerfulDigitCounts = (n) => {
    let x = 1
    let  count = -1
    let fount = true
    while(fount) {
        let sP = String(x**n).length
        while(sP === n) {
            fount = false
            sP = String(x**n).length
            count++
            x++
        }
        x++
    }
    return count
}

console.log(powerfulDigitCounts(1))
console.log(powerfulDigitCounts(2))
console.log(powerfulDigitCounts(3))
console.log(powerfulDigitCounts(4))
console.log(powerfulDigitCounts(5))
console.log(powerfulDigitCounts(6))
console.log(powerfulDigitCounts(7))
console.log(powerfulDigitCounts(8))
console.log(powerfulDigitCounts(10))
console.log(powerfulDigitCounts(21))