

let isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
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
    for (let i = 101; i <= p; i++) if (seive[i]) primes.push(i);
    return primes
}
//-----------------------------------------------------
let  mapBToStas = (baseNum, n) => {
  let digits = baseNum.toString().split(''); 
  let results = [];

  for (let i = 1; i < (1 << n); i++) { 
    let bin = i.toString(2).padStart(n, '0').split('');
    let mapped = [...digits]; 

    for (let j = 0; j < n; j++) {
      if (bin[j] === '1') {
        mapped[j] = '*';
      }
    }
    results.push(mapped.join(''));
  }
  return results;
}
//------------------------------------------------

console.time("scratchPad4")
let c = []
for(let p of Primes(999999)) c.push(mapBToStas(p, 2));

console.log(c.flat())
console.log([...new Set(c.flat())])
console.log(Primes(999999))
console.timeEnd("scratchPad4")

