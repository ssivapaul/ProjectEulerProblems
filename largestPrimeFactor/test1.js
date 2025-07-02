function largestPrimeFactor(number) {
  let isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false; // Found a divisor, so it's not prime.
    }
    return true; // No divisors found, so it's prime.
  };
  let largestP = [];
  for (let n = 1; n < number; n++) {
    if (isPrime(n)) {
      if (number % n == 0) {
        largestP.push(n);
      }
    }
  }
  if (largestP) {
    return largestP.pop();
  } else return number;
}

console.log(largestPrimeFactor(600851475143));
