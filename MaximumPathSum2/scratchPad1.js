

let findMaxPath = (triangle) => {
    let rs = triangle.length;
    let cs = triangle[0].length;
    let memo = {}; 
    let maxPath = (r, c) => {
        if (r >= rs || c >= cs) return 0; // Out of bounds
        if (r === rs - 1 && c === cs - 1) return triangle[r][c]; // Reached the last number
        if (memo[`${r},${c}`] !== undefined) return memo[`${r},${c}`]; // Look for saved sum

        let rSum = maxPath(r + 1, c); // Move downwards....
        let cSum = maxPath(r, c + 1); // Move rightwards..
        let curMaxSum = triangle[r][c] + Math.max(rSum, cSum);
        memo[`${r},${c}`] = curMaxSum;
        return curMaxSum;
    }
    return maxPath(0, 0); // call maxPath method with (0, 0)
}

// Example usage:
const grid = [
  [10, 0, 0],
  [1, 5, 0],
  [4, 2, 1]
];

console.time("MaxPathSum")
const result = findMaxPath(grid);
console.log(`Maximum path sum: ${result}`); 
console.timeEnd("MaxPathSum")