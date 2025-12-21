
let countingRectangles = (n) => {
    let cOb = {}
    let ijC = 0
    for(let i = 1; true; i++) {
        let count = 0
        for(let j = i; true; j++) {
            count++
            ijC = (i*(i + 1)/2) * (j*(j + 1)/2)
            if(ijC >= n) {
                cOb[`${i}, ${j - 1}`] = (i*(i + 1)/2) * (j*(j - 1)/2)
                cOb[`${i}, ${j}`] = ijC
                break 
            }
        } 
        if(count == 1) break        
    }
    let cArr = Object.entries(cOb)
    let sArr = cArr.sort((a, b) => (a[1] - b[1]))
    let mcArr = sArr.map(a => [a[0], Math.abs(n - a[1])])
    let smcArr = mcArr.sort((a, b) => (a[1] - b[1]))
    let cR = smcArr[0][0].split(', ')
    let ccR = Number(cR[0]) * Number(cR[1])
    return ccR
}

console.time("CountSquares")
console.log(countingRectangles(18))
console.log(countingRectangles(250))
console.log(countingRectangles(50000))
console.log(countingRectangles(1000000))
console.log(countingRectangles(2000000))
//console.log(Number((mcArr.split(', ')[0]) * Number(mcArr.split(', ')[1])))
console.timeEnd("CountSquares")