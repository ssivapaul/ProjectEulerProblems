
function convergentsOfE(n) {
  // Generate coefficients for e
  let a = [2];
  for (let i = 1; i < n; i++) {
    if (i % 3 === 2) {
      a.push(2 * Math.floor((i + 1) / 3));
    } else {
      a.push(1);
    }
  }

  // Now compute numerator/denominator using recurrence
  let num = 1n, den = 0n;
  for (let i = n - 1; i >= 0; i--) {
    let temp = num;
    num = BigInt(a[i]) * num + den;
    den = temp;
  }
  console.log(num)

  // Sum of digits in numerator
  return num.toString().split('').reduce((s, d) => s + Number(d), 0);
}

console.time("Convergent")
//console.log(convergentsOfE(10))
//console.log(convergentsOfE(30))
//console.log(convergentsOfE(50))
console.log(convergentsOfE(70))
//console.log(convergentsOfE(100))
console.timeEnd("Convergent")
