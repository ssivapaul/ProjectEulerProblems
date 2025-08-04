function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  let isPrime = (n) => {
    if (n <= 1) return false
    if (n == 2) return true
    if (n % 2 === 0) return false
    let i = 2
    while (i++ <= Math.floor(Math.sqrt(n))) {
      if( n%i === 0) return false
    }
    return true
  }
//----------------------------------
  let primes = [2]
  let getNextPrime = (i) => {
    let temp = i
    while(true) {
      temp++
      if(isPrime(temp)) {
        if(!primes.includes(temp)) primes.push(temp)
        break
      }
    }
    return temp
  }
  //---------------------------------
  let numTrack = {}
  for (let i = 2; true; i++) {
    let temp = i
    let primeCount = targetNumPrimes
    for(let p of primes) {
      if(primeCount == 0) { // met number of prime divisers
        numTrack[i] = numTrack[i-1]?   numTrack[i-1] + 1 : 1
        break
      }
      let div = false
      while (temp % p == 0) {
        div = true
          temp /= p
      }
      if (div == true) primeCount-- // decrement prime counts
    }
    if(numTrack[i] === targetConsecutive) return (i - targetConsecutive + 1)
    getNextPrime(i) // add to the primes list
  }
  return -1
}


console.time('myFunction');
console.log(distinctPrimeFactors(4, 4));
console.timeEnd('myFunction');



/*
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  // Prime check
  let isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Get distinct prime factors
  const getDistinctPrimeFactors = (n) => {
    let count = 0;
    let temp = n;
    let factor = 2;

    while (factor <= Math.sqrt(temp)) {
      if (temp % factor === 0) {
        count++;
        while (temp % factor === 0) {
          temp /= factor;
        }
      }
      factor = factor === 2 ? 3 : factor + 2;
    }

    if (temp > 1) count++; // remaining prime factor
    return count;
  };

  let consecutive = 0;
  let i = 2;

  while (true) {
    if (getDistinctPrimeFactors(i) === targetNumPrimes) {
      consecutive++;
      if (consecutive === targetConsecutive) {
        return i - targetConsecutive + 1;
      }
    } else {
      consecutive = 0;
    }
    i++;
  }
}
*/
