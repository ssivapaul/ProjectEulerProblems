
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

let gCD = (a, b) => {
    while(b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0; // LCM involving zero is zero
  return Math.abs(a * b) / gcd(a, b);
};

const lcmMultiple = (...num) => {
  if (num.length === 0) return 0;
  return num.reduce((acc, cur) => lcm(acc, cur));
};

//console.log(lcmMultiple(8, 7, 6, 5, 4, 3)); // 
console.log(gcd(14, 6))