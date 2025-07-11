function maximumPathSumI(triangle) {

  const results = [];

  function traverse(x, y, cumSum) {
    cumSum += triangle[x][y];

    if (x === triangle.length - 1) {
      results.push(cumSum);
      return;
    }

    traverse(x + 1, y, cumSum);
    traverse(x + 1, y + 1, cumSum);
  }

  traverse(0, 0, 0, []);
  
  let maxSum = 0
    for (let sum of  results) {
        if(sum > maxSum) maxSum = sum
    }

  return maxSum;
}

const test1 = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3],
];

let test2 = 
    [
        [3, 0, 0, 0], 
        [7, 4, 0, 0],
        [2, 4, 6, 0],
        [8, 5, 9, 3]
    ]

    
let triangle = 
    [
        [75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0], 
        [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0], 
        [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0], 
        [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0], 
        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0], 
        [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0], 
        [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0, 0], 
        [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 0], 
        [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
    ]

const maxSum = maximumPathSumI(test1);


console.log("MaxSum: ",  maxSum)



    /*
    function triangleSums(triangle) {
  const results = [];

  function traverse(rowIndex, colIndex, currentSum, path) {
    // Add the current number to the path and sum
    path.push(triangle[rowIndex][colIndex]);
    currentSum += triangle[rowIndex][colIndex];

    // If we reach the last row, add the current sum to the results
    if (rowIndex === triangle.length - 1) {
      results.push({ sum: currentSum, path: [...path] });
      return;
    }

    // Recursively explore the left and right paths
    traverse(rowIndex + 1, colIndex, currentSum, [...path]);
    traverse(rowIndex + 1, colIndex + 1, currentSum, [...path]);
  }

  // Start the traversal from the top (first row, first column)
  traverse(0, 0, 0, []);

  return results;
}

// Example usage:
const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3],
];

const allSums = triangleSums(triangle);

// Output: allSums will contain objects like:
// { sum: 15, path: [ 2, 3, 6, 4 ] },
// { sum: 14, path: [ 2, 3, 6, 1 ] },
// { sum: 17, path: [ 2, 3, 5, 8 ] },
// { sum: 13, path: [ 2, 3, 5, 3 ] },
// { sum: 18, path: [ 2, 4, 6, 4 ] },
// { sum: 16, path: [ 2, 4, 6, 1 ] },
// { sum: 19, path: [ 2, 4, 5, 8 ] },
// { sum: 15, path: [ 2, 4, 5, 3 ] }
console.log(allSums);

    */