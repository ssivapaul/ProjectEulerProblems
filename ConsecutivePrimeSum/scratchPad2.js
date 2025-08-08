function consecutivePrimeSum(limit) {
  let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false; 
  return true;
  }
//----------------------------------
let P = []
for (let i = 0; i < limit; i++ ) {
    if (isPrime(i)) {
        P.push(i) 
    }
}

  let sum = 0
  let n = P.length - 1
  for(let i = 0; i <= limit; i++) sum += P[i]

  let accP = 0
  for(let i = n; i > 0; i--) {
    accP += P[i]
    if(isPrime(sum-accP)) return P[i-1]
  }
}

console.log(consecutivePrimeSum(1000));