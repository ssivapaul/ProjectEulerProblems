

let totientPermutation = (limit) => {
  let sieve = (n) => {
    let arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= n; j += i) arr[j] = false;
      }
    }
    let ar = arr.map((v, i) => (v ? i : 0)).filter(i => i!==0)
    return ar;
  };
 //Main routine
  let minPh = Infinity, nPerm = 0, P = 0
  if(limit >= 400000) {
    P = sieve(Math.floor(Math.sqrt(2*limit)))
  } else if(limit < 400000) {
      P = sieve(limit)
  }
  for(p1 of P) {
    for(p2 of P) {
      if(p1 == p2) continue
      if(p1*p2 > limit) break
      let n = p1*p2, phi = (p1 - 1)*(p2 - 1)
      let nP = String(n).split('').sort().join('')
      let phiP = String(phi).split('').sort().join('')
      if(nP == phiP) {
        if(n/phi < minPh) {
          minPh = n/phi
          nPerm = n
        }
      }
    } 
  }
  return nPerm
}


console.time("TotientPermutation")
console.log(totientPermutation(10000))
console.log(totientPermutation(100000))
console.log(totientPermutation(500000))
console.log(totientPermutation(10000000))
console.timeEnd("TotientPermutation")