function maximumPathSumII(triangle) {
  let rs = triangle.length;
  let cs = triangle[0].length;
  let memo = {}; 
  let maxPath = (r, c) => {
    if (r >= rs || c >= cs) return 0; // Out of bounds
    if (r === rs - 1 && c === cs - 1) return triangle[r][c]; // Reached the last number
    if (memo[`${r},${c}`] !== undefined) return memo[`${r},${c}`]; // Look for saved sum
    // Otherwise, calculate max Sum
    let rSum = maxPath(r + 1, c + 1); // Move right wards....
    let cSum = maxPath(r + 1, c); // Move down wards..
    let curMaxSum = triangle[r][c] + Math.max(rSum, cSum);
    memo[`${r},${c}`] = curMaxSum; // Save curMaxSum
    return curMaxSum;
  }
  return maxPath(0, 0); // call maxPath method with (0, 0)
}



console.time("MaxPathSum")
const result = maximumPathSumII([[3, 0, 0, 0],[7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]]) 
console.log(`Maximum path sum: ${result}`); 
console.timeEnd("MaxPathSum")
//maximumPathSumII([[3, 0, 0, 0],[7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]]) 