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
    let lastP = primes[primes.length - 1]
    if(lastP > temp) return lastP
    while(true) {
      temp++
      if(isPrime(temp)) {
         primes.push(temp)
        break
      }
    }
    return temp
  }
  //---------------------------------
  //Main routine
  let numTrack = {}
  for (let i = 2; true; i++) {
    let temp = i
    let primeCount = targetNumPrimes
    for(let p of primes) {
      let div = false
      while (temp % p == 0) {
        div = true
          temp /= p
      }
      if (div == true) primeCount-- // decrement prime counts
        if(primeCount == 0) { // met number of prime divisers
            numTrack[i] = numTrack[i-1]?   numTrack[i-1] + 1 : 1
            break
        }
       if(p > temp) break
    }
    if(numTrack[i] === targetConsecutive) return i-targetNumPrimes+1
    let lastP = primes[primes.length - 1]
    getNextPrime(i) // add to the primes list
  }
  return -1
}

console.time('myFunction');
console.log(distinctPrimeFactors(4, 4));
console.timeEnd('myFunction');