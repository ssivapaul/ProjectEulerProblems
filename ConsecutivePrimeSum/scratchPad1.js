let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false; 
  return true;
}

console.time("ConsecutivePrimeSum")
let P = []
for (let i = 0; i < 1000; i++ ) if (isPrime(i)) P.push(i)

let result = []
let sum = 0
let n = P.length - 1
for(let i = 0; i <= n; i++) sum += P[i]

let accP = 0
for(let i = n; i > 0; i--) {
    accP += P[i]
    if(isPrime(sum-accP)) {
        console.log(P[i-1])
        break
    }
}
console.timeEnd("ConsecutivePrimeSum")
/*
console.log([...P].splice(0,5))
console.log("P[0]: ", P[0])
console.log("P.splice(1): ", P.splice(1))
*/

