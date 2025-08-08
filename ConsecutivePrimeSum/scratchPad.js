

let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false; 
  }
  return true;
}
//----------------------------------
console.time("ConsecutivePrimeSum")
let P = []
for (let i = 0; i < 1000; i++ ) if (isPrime(i)) P.push(i)

let n = P.length - 1
let sum = 0
let maxI = 0
let maxJ = 0
let maxLen = 0
let maxSum = 0
for(let i = 0; i < n; i++) {
    sum = 0
    for(let j = i; j < n; j++) {
        sum += P[j]
        if(sum >= 1000) break
        if(isPrime(sum)) {
            console.log(sum, j, i, j-i, P[j])
            if(maxLen < j - i + 1) {
                maxI = i
                maxJ = j
                maxLen = j - i + 1
                maxSum = sum
            }
        }
        console.log(j, i, j - i, P[j], "-----------------")
    }
}

console.log(maxI, maxJ, maxLen, maxSum)
console.timeEnd("ConsecutivePrimeSum")