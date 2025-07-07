function divisibleTriangleNumber(n) {
    let i = 1;
    let sum = 1
    while(sum <= 76576501) {
        const divisor = new Set();
        const sqrtSum = Math.floor(Math.sqrt(sum));
        for (let j = 1; j <= sqrtSum; j++) {
            if (sum % j === 0) {
                divisor.add(j); 
                divisor.add(sum/j)
            }
        }
        if(divisor.size-1 >= n) return sum
        i++
        sum += i
    }
    return sum
}

console.log(divisibleTriangleNumber(500))

/*
Waiting:1. divisibleTriangleNumber(5) should return a number.
Waiting:2. divisibleTriangleNumber(5) should return 28.
Waiting:3. divisibleTriangleNumber(23) should return 630.
Waiting:4. divisibleTriangleNumber(167) should return 1385280.
Waiting:5. divisibleTriangleNumber(374) should return 17907120.
Waiting:6. divisibleTriangleNumber(500) should return 76576500.

function getDivisors(n) {
  const divisors = new Set();
  const sqrtN = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }

  return Array.from(divisors).sort((a, b) => a - b);
}

*/



