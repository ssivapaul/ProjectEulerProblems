let primeSummations = (n) => {
    // Helper function
let isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2)return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false; 
    return true
  }
  // Helper function
  let Prime = (num) => {
    let P = []
    for(let i = 1; i < num; i++) if(isPrime(i)) P.push(i)
    return P
  }
// Main routing
let limit = 104
  let pSum = new Array(limit + 1).fill(0); pSum[0] = 1
  for(let p of Prime(limit)) {
    for(let j = p; j < limit + 1; j++) pSum[j] += pSum[j - p]
  }
  for(let i = 0; i < pSum.length; i++) if(pSum[i] > n) return i
  
}

console.time("PSummation")
console.log(primeSummations(5))
console.log(primeSummations(100))
console.log(primeSummations(1000))
console.log(primeSummations(5000))
console.timeEnd("PSummation")
