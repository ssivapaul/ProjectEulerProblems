function sumSquareDifference(n) {
  let sumSq = 0;
  let sqSum = 0
  for(let i = 1; i <= n; i++) {
    sumSq += i
    sqSum += Math.pow(i, 2)
  }
  sumSq = Math.pow(sumSq, 2)

  return sumSq - sqSum;
}

console.log(sumSquareDifference(10));