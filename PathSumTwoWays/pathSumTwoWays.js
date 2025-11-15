const { minimum } = require("bignumber.js");

const testMatrix1 = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

const testMatrix  = [
  [1, 6, 2],
  [0, 9, 3],
  [6, 3, 7],
];

function pathSumTwoWays(matrix) {
    let ob = {}
    let minSum = (x, y) => {
        let i = [x, y]
        if(ob[i] !== undefined) {
            return ob[i]
        } else {
            if(x == 0 && y == 0) {
                ob[i] = matrix[x][y]
                return ob[i] 
            }
            if(x == 0 && y > 0) {
                ob[i] = matrix[x][y] + minSum(x, y - 1)
                return ob[i] 
            }
            if(x > 0 && y == 0) {
                ob[i] = matrix[x][y] + minSum(x - 1, y)
                return ob[i] 
            }
            if(x > 0 && y > 0) {
                ob[i] = matrix[x][y] + Math.min(minSum(x - 1, y), minSum(x, y - 1))
                return ob[i] 
            }
        }
    }
    let size = matrix.length - 1
    return minSum(size, size)
}

console.time("PathSum")
console.log(pathSumTwoWays(testMatrix1))
console.timeEnd("PathSum")
