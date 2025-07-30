let isPrime = (n) => {
    if (n <= 1) return false
    if(n%2 == 0) return false
    let m = Math.floor(Math.sqrt(n))
    for(let i = 3; i <= m; i += 2) {
         if(n%i === 0) return false
    }
    return true
}

let panDigit = (d) => {
    let base = '123456789'.slice(0, d)
    let P = []
    let permu = (permut, remain) => {
        if(remain.length === 0) P.push(Number(permut))        
        
        for(let i = 0; i < remain.length; i++) {
            let curPer = permut+ remain[i]
            let curRem = remain.slice(0, i) + remain.slice(i+1)
            permu(curPer, curRem)
            //curPer.pop()
        }
    }
    permu([], base)
    return P
}

let primPan = []
panDigit(4).forEach(p => { if(isPrime(p)) primPan.push(p) })

console.log(primPan[primPan.length-1])

