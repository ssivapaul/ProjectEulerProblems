

let countWays = (den, n) => {
  let target = new Array(n + 1).fill(0);
  target[0] = 1;
// den = [1, 2, 5, 10, 20, 50, 100, 200];
  for (let d of den) {
    for (let j = d; j <= n; j++) {
      target[j] += target[j - d];
    }
  }
  return target[n];
}

const den = [1, 2, 5, 10, 20, 50, 100, 200];
const n = 91;

const nOfWays = countWays(den, n);
console.log(`Number of ways to make ${n}p: ${nOfWays}`);