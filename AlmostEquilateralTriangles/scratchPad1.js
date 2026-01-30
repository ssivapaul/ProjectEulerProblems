
let isBigIntSq = (m) => {
    //console.log(m)
    let n = BigInt(m)
    if (n < 0n) return false;
    if (n < 2n) return true;

  // Initial estimate: 2^(bitLength / 2)
    let x = 1n << (BigInt(n.toString(2).length) / 2n + 1n);
    let y = (x + n / x) >> 1n;

  // Iterative refinement
    while (y < x) {
        x = y;
        y = (x + n / x) >> 1n;
    }
  
    return x * x === n;
};

let isPSq = (n) => {
  let h = n & 0xF; 
  if (h > 9 || h === 2 || h === 3 || h === 5 || h === 6 || h === 7 || h === 8) {
    return false;
  }
  let root = Math.sqrt(n);
  return Number.isInteger(root);
};

let limit = 10000000
console.time("Almost")
let sum = 0
for(let a = 2; (3*a + 1)  < limit; a++) {
    let A1 = (((a + 1)/4)**2)*(3*a**2 - 2*a - 1)
    if(Number.isInteger(A1) && isBigIntSq(A1)) sum += 3*a + 1
}

for(let a = 2; (3*a - 1) < limit; a++) {
    let A2 = (((a - 1)/4)**2)*(3*a**2 + 2*a - 1)
    if(Number.isInteger(A2) && isBigIntSq(A2)) sum += 3*a - 1
}
console.log(sum)
console.timeEnd("Almost")

/*
Tests
Waiting:1. almostEquilateralTriangles(50) should return a number.
Waiting:2. almostEquilateralTriangles(50) should return 66.
Waiting:3. almostEquilateralTriangles(10000) should return 3688.
Waiting:4. almostEquilateralTriangles(10000000) should return 9973078.
Waiting:5. almostEquilateralTriangles(1000000000) should return 518408346.
*/