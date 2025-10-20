
let dPF = (num) =>{
  if (num < 2) {
    return []; // Numbers less than 2 have no prime factors
  }

  let distinctFactors = new Set(); 
  let divisor = 2;
  let n = num
  while (num > 1) {
    if (num % divisor === 0) {
      distinctFactors.add(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return Array.from(distinctFactors);
}

let totientS = (limit) => {
  let phi = [...new Array(limit + 1)].map((_, i) => i );
  for (let p = 2; p <= limit; p++) {
    if(phi[p] == p) { // ensures p is prime
      for (let k = p; k <= limit; k += p) phi[k] -= phi[k] / p;
    }
  }
  return phi;
}

console.time("TotienP")
let tPerm = []
let tot = totientS(10000000)
//console.log(tot.map((t, k) => ([k, t])))
for(let i = 2; i < tot.length; i++) {
    let sT = String(tot[i]), iT = String(i)
    if(sT.length !== iT.length) continue
    if(sT.split('').sort().join('') === iT.split('').sort().join('')) {
        tPerm.push([dPF(i),i ,tot[i], (i/tot[i]).toFixed(7)])
    }
}
//console.log(tPerm.slice(1700).filter(tP => tP[2] < 1.0017136))
console.log(tPerm)

let tMin = Infinity
let tP = 0
for(let i = 0; i < tPerm.length; i++) {
    if(tPerm[i][3] < tMin) {
        tMin = tPerm[i][3]
        tP = tPerm[i][1]
    }
}
console.log(tPerm.filter(t => t[3] < 1.0009))
console.log(tMin, tP, tPerm.length)
console.timeEnd("TotienP")