function truncatablePrimes(n) {
  let isPrime = (n) => {
    if(n <= 1) return false
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0) return false
    }
    return true
  }
//-----------------------------

  TP =[]
  let p = 10
  while (true) {
    if(isPrime(p)) {
      let prime = true
      let P = p.toString().split('')
      let pL = [...P]
      let pR = [...P]
      let n = P.length
      while (n-- > 0) {
        if(!isPrime(Number(pL.join(''))) || !isPrime(Number(pR.join('')))) {
          prime = false
            break
        }
        pL.shift()
        pR.pop()
      }
      if(prime) TP.push(p)
    }
    if (TP.length >= n) break
    p++
  }

  let sum = 0
  for(let p of TP) sum += p
  //console.log(TP)
  //console.log("n: ", n, "Sum: ", sum)
  return sum
}

console.log(truncatablePrimes(8));