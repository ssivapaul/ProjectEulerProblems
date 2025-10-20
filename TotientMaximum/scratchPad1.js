
let distinctPrimeFactors = (num) =>{
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

const gcdIt = (a, b) => {
  a = Math.abs(a), b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

let isPrime = (num) => {
  let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    if (num % 2 === 0) return false
    for(let i=2; i<sqrtnum + 1; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

let n = 50000
let maxPhi = 0
let tMax = 0

console.time("Totient")
for(let i = 2; i < n; i++) {
    let phi = 1, mPhi  = 1
    if(isPrime(i)) {
        continue
    } else {
        for(let j = 2; j < i; j++) {
            if(!(i % j)) continue
            let mGcd = gcd(i, j)
            if(mGcd === 1) phi++
        }
    }
    mPhi = i/phi
    if(maxPhi < mPhi){
        maxPhi = mPhi
        tMax = i
    }
}
console.log(tMax);       // 6

console.timeEnd("Totient")