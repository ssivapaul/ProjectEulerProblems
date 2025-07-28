
let isPrime = (n) => {
    if(n <= 1) return false
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0) return false
    }
    return true
}

lst =[]
for(let i = 11; i < 1000000; i++) {
    if(isPrime(i)) {
        let prime = true
        let arrL = i.toString().split('')
        let n = arrL.length
        while (n-- > 0) {
            if(!isPrime(Number(arrL.join('')))) {
                prime = false
                break
            }
            arrL.shift()
        }
        if(prime) lst.push(i)
    }
}

let finalLst = []
for(let l of lst) {
    let prime = true
    let arrR = l.toString().split('')
    let n = arrR.length
    while (n-- > 0) {
        if(!isPrime(Number(arrR.join('')))) {
            prime = false
            break
        }
        arrR.pop()
    }
    if(prime) finalLst.push(l)
}

//console.log(finalLst)
let sum = 0
for(let f of finalLst.slice(0, 11)) {
    sum += f
}
console.log(sum)
