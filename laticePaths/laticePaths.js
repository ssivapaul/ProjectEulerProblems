
function latticePaths(gridSize) {

  const memo = {};
  
  function lPath(x, y) {
    const key = `${x},${y}`;
    if (memo[key] !== undefined) return memo[key];
    if (x === 0 || y === 0) return 1;
    memo[key] = lPath(x - 1, y) + lPath(x, y - 1);
    return memo[key];
  }

  return lPath(gridSize, gridSize);
}

console.log(latticePaths(20));


/*
function latticePaths(n) {
    let x = 0
    let y = 0
    let lPath = (x, y) => {
        if(x == n) return 1
        if(y == n) return 1
        if(x < n && y < n) {
            return lPath(x+1, y) + lPath(x, y+1)
        }  
    }
    return lPath(x, y)
}

console.log(latticePaths(4));

*/

/*

function latticePaths(gridSize) {
  const memo = {};

  function lPath(x, y) {
    const key = `${x},${y}`;
    if (memo[key] !== undefined) return memo[key];

    if (x === 0 || y === 0) return 1;

    memo[key] = lPath(x - 1, y) + lPath(x, y - 1);
    return memo[key];
  }

  return lPath(gridSize, gridSize);
}

console.log(latticePaths(20)); // Output: 137846528820

*/

/*

function latticePaths(gridSize) {
  const grid = Array(gridSize + 1)
    .fill()
    .map(() => Array(gridSize + 1).fill(0));

  // Initialize first row and column
  for (let i = 0; i <= gridSize; i++) {
    grid[i][0] = 1;
    grid[0][i] = 1;
  }

  // Fill the grid
  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[gridSize][gridSize];
}

console.log(latticePaths(20)); // 137846528820

*/

/* 
2. Combinatorics Formula
The number of lattice paths from the top-left to bottom-right of an n x n grid is:

This is the fastest method.


function latticePaths(gridSize) {
  function factorialBigInt(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = BigInt(gridSize);
  const result = factorialBigInt(2n * n) / (factorialBigInt(n) * factorialBigInt(n));
  return result.toString(); // Return as string to avoid losing precision
}

console.log(latticePaths(20)); // '137846528820'
🟢 Time Complexity: O(n)
🟢 Space: O(1) (excluding BigInt storage)

🔁 Summary
Method	Time	Space	Suitable For
Recursion (naive)	❌ Exponential	❌ High	Small n (≤ 10)
Recursion + Memo	✅ O(n²)	✅ O(n²)	Moderate n (~20–30)
DP Table	✅ O(n²)	✅ O(n²)	Moderate n (~100)
Combinatorics	✅ O(n)	✅ O(1)	Very large n (hundreds or more)

*/