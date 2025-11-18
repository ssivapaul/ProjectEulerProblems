
function pathSumThreeWays(matrix) {
  let n = matrix.length
  let minPath = []
  for(let i = 0; i < n; i++) minPath.push(matrix[i][n-1])
  for(let i = n-2; i >= 0; i--) { // Trace from right to left
    let t = [...minPath] // get a copy of original minPath.
    minPath[0] += matrix[0][i]
    for(let j = 1; j < n; j++) { // Tracing down Wards along column, i
      let downTrace = Math.min(minPath[j], minPath[j-1])
      minPath[j] =  downTrace + matrix[j][i]
    }
    for(let j = n-2; j >= 0; j--) { // Tracing Up Wards along column, i
      let upTrace = Math.min(t[j], minPath[j+1])
      minPath[j] = Math.min((upTrace + matrix[j][i]), minPath[j])
    }
  }
  return Math.min(...minPath)
}

// Only change code above this line

const testMatrix1 = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumThreeWays(testMatrix1);