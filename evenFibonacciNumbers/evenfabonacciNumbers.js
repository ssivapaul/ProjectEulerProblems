
/*

function fibonacciIterative(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 2];

  const fib = [1, 2];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib)
    let evenFib = fib
      .filter((f) => f % 2 == 0)
    console.log(evenFib);
    let evenSum = evenFib.reduce((acc, cur) => acc + cur, 0)
  return evenSum;
}


console.log(fibonacciIterative(8));
console.log(fibonacciIterative(10));
console.log(fibonacciIterative(34));
console.log(fibonacciIterative(44));
*/
function fiboEvenSum(n) {
  let a = 1,
    b = 2,
    sum = 0;

  while (a <= n) {
    if (a % 2 === 0) sum += a;
      [a, b] = [b, a + b]; // a = b and b += a, in every step of iteration
  }

  return sum;
}

console.log(fiboEvenSum(8));
console.log(fiboEvenSum(10));
console.log(fiboEvenSum(34));
console.log(fiboEvenSum(44));