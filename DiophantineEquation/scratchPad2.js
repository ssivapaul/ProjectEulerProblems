
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
    return [P, Q]
}

console.time("Diophantine")
let DP = []
for (let i = 2; i <= 7; i++) {
    if(Math.sqrt(i) == Math.floor(Math.sqrt(i))) continue
    let P = periodSqrt(i)
    let n = P[1].length - 1
    if(n % 2 == 1) {
        cOddEven = [...P[1].slice(), ...P[1].slice(1, -1)]
    } else {
        cOddEven = [...P[1].slice(0, n)]
    }
    if(cOddEven != []) {
        let pP = converge(cOddEven)
        DP.push([P[0], pP[0]])
    }
}

console.log(DP)

let maX = 0n, maD = 0
for(let dp of DP) {
    let x = dp[1]
    let D = dp[0]
    if(x > maX) {
        maX = x
        maD = D
    }
}
console.log(maD)
console.timeEnd("Diophantine")



/*
let converge = (a) => {
    let len = a.length - 1
    let p_1 = 1, q_1 = 0
    let tmp1p = p_1, tmp2p = a[0]
    let tmp1q = q_1, tmp2q = 1
    let p, q

    for(let i = 2; i < len; i++) {
        p = a[i-1]*tmp2p + tmp1p
        tmp1p = tmp2p
        tmp2p = p
        q = a[i-1]*tmp2q + tmp1q
        tmp1q = tmp2q
        tmp2q = q
    }
    return[p, q]
}
*/
