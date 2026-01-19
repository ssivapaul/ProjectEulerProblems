
let digitSum = (n) => {
    while(n !== 0) {
        sum += (n%10)**2
        n = Math.floor(n/10)
    }
    return sum
}
let isSum89 = (n) => {
    while(true) {
        let sum = 0
        if(n == 89) return true
        if(n == 1) return false
        while(n !== 0) {
            sum += (n%10)**2
            n = Math.floor(n/10)
        }
        n = sum
    }
}


console.time("SquareDigitSum")
console.log(isSum89(12))
let count = 0
for(let i = 2; i < 10000000; i++) {
    if(isSum89(i)) count++
}
console.log(count)
console.timeEnd("SquareDigitSum")