
function sumFactorialDigits(n) {
  let factorial = (n) => {
    let result = 1n; // BigInt
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result;
  };

  let fac = factorial(n);
  let sum = 0;
  for (let digit of fac.toString()) {
    sum += Number(digit);
  }
  return sum;
}

sumFactorialDigits(10);
sumFactorialDigits(25);
sumFactorialDigits(50);
sumFactorialDigits(75);
sumFactorialDigits(100);

/*
function sumFactorialDigits(n) {
    let factorial = (n) => {
    if (n == 1) return 1
    return n*factorial(n-1)
  }
  let fac = factorial(n)
  console.log(fac)
  let sum = 0
  while(fac > 0) {
    sum += fac%10
    fac = Math.floor(fac/10)
  }
  return sum
}

console.log(sumFactorialDigits(25));

*/