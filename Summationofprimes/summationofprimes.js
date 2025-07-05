


function primeSummation(n) {

  let sPrime = (n) => {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  return primes;
  }
//----------------------------------------------
  let sum = 0;
  let prime = sPrime(n);
  for (let i = 0; i < prime.length; i++) {
    sum += prime[i];
  }
  return sum;
}

console.log(primeSummation(2000000));