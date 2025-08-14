
/*
let isPrime = (num) => {
  if (num <= 1)  return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
*/

let isPrime = (p) => {
  let seive = new Array(p+1).fill(true);
  seive[0] = seive[1] = false;
  for (let i = 2; i * i <= p; i++) {
    if (seive[i]) {
      for (let j = i * i; j <= p; j += i) seive[j] = false;
    }
 }
    return seive[p]
}
//----------------------------------------------
let Primes = (p) => {
    let primes = [];
    let seive = new Array(p+1).fill(true);
    seive[0] = seive[1] = false;
    let i = 2
    while (i * i <= p) {
        if (seive[i]) {
            for (let j = i * i; j <= p; j += i) seive[j] = false;
        }
        i++
    }
    for (let i = 11; i <= p; i++) if (seive[i]) primes.push(i);
    return primes
}
//-----------------------------------------------------
let  mapBToStas = (bNum, n) => {
  let d = bNum.toString().split(''); 
  let r = [];

  for (let i = 1; i < (1 << n); i++) {
    let bin = i.toString(2).padStart(n, '0').split('');
    let m = [...d]; 

    for (let j = 0; j < n; j++) {
      if (bin[j] === '1') m[j] = '*';
    }
    r.push(m.join(''));
  }
  return r;
}
//-----------------------------------------------
let primeDigitReplacements = (num) => {
    let c = []
    let ssP = Primes(999999)
    for(let p of ssP) c.push(mapBToStas(p, String(p).length-1));
    let strP = [...new Set(c.flat())]
    for(let sP of strP) {
        let nP = []
        let s = ''
        let p = ''
        let count = 0
        for(let i = 0; i <= 9; i++) {
            if(i == 0 && sP[i] == '*') continue
            s = sP.slice(0)
            p = s.replaceAll('*', i)
            if(isPrime(parseInt(p))) {
                nP.push(p) // Pushing to prime family array
                count++ 
                if(count >= num) return nP[0]
            }
        }
    }
}

console.time("PrimeDigitReplacements")
console.log(primeDigitReplacements(8))
console.timeEnd("PrimeDigitReplacements")

