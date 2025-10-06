
let periodSqrt = (D) => {    
    let f = Math.floor(Math.sqrt(D))
    if(Math.sqrt(D) == f) return [D, []]
    let c = f, b = 1, d = 1, an = 1
    let a0 = f,An = [a0]
    while (true) {
        d = (D - c**2)/b
        an = Math.floor((f + c)/d)
        An.push(an)
        c = an*d - c
        b = d
        if(b == 1 && c == f) break
    }
    return [D, An]
}

let converge = (c) => {
    let len = c.length - 1
    let P = BigInt(c[len])
    let Q = 1n
    let temp = 0n
    for(let i = len; i > 0; i--) {
        temp = P
        P = BigInt(c[i-1])* P + Q
        Q = temp
    }
    return P
}

let DiaphantineEquation = (n) => {
    let cOddEven = []
    let DP = [], P = []
    for(let D = 2; D <= n; D++) {
        let f = Math.floor(Math.sqrt(D))
        if(f == Math.sqrt(D)) continue
        P = periodSqrt(D)
        let n = P[1].length - 1
        if(n % 2 == 1) {
            cOddEven = [...P[1].slice(), ...P[1].slice(1, -1)]
        } else {
            cOddEven = [...P[1].slice(0, n)]
        }
        if(cOddEven != []) {
            let pP = converge(cOddEven)
            DP.push([D, pP])
        }
    }
    let maxP = 0n, maxD = 0
    for( let dp of DP) {
        if(maxP < dp[1]) {
            maxP = dp[1]
            maxD = dp[0]
        }
    }
    return maxD
}

console.time("DiophantineEquation")
console.log(DiaphantineEquation(7))
console.log(DiaphantineEquation(100))
console.log(DiaphantineEquation(409))
console.log(DiaphantineEquation(500))
console.log(DiaphantineEquation(1000))
console.timeEnd("DiophantineEquation")

/*
console.time("Diophant")
let lXY = []
let lD = []
let xMax = 1
let x  = 1
let yMax = 1
let D = 100
while(D-- > 1) {
    let found = false
    for(let y = 2; y < 100000; y++) {
        if(x > 100000) break
        for(x = y; x < 100000; x++) {
            let z = x**2 - D*y**2 
            if(z >= 1) {
                if(z == 1) {
                    lXY.push([x, y, D]), lD.push(D)
                    found = true
                }
                break
            }
        }
        if(found == true) break
    }
}
    
console.log(lXY, lD)
console.log(lXY.length)
console.timeEnd("Diophant")
*/