function consecutivePrimeSum(limit) {
  let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false; 
  }
  return true;
  }
//Main routine
//----------------------------------
  let P = []
  for (let i = 0; i < limit; i++ ) if (isPrime(i)) P.push(i)
//----------------------------------
  let n = P.length - 1
  let maxLen = 0
  let maxSum = 0
  for(let i = 0; i < n; i++) {
    let sum = 0
    for(let j = i; j < n; j++) {
      sum += P[j]
      if(sum >= limit) break
      if(isPrime(sum)) {
        if(maxLen < j - i + 1) {
            maxLen = j - i + 1
            maxSum = sum
        }
      }
    }
  }
  return maxSum
}
    
console.time("ConsecutivePrimeSum")
console.log(consecutivePrimeSum(1000000));
console.timeEnd("ConsecutivePrimeSum")
