

const fs = require('fs');
//const path = require('path');
/*
// Access a file in a parent directory
fs.readFile('./PathSumFourWays/0083_matrix.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

let data = fs.readFileSync('./PathSumFourWays/0083_matrix.txt', 'utf8')
console.log(data)
 
const originalString = "   Hello, World!   \n Some more text   ";
const trimmedString = originalString.trim();

console.log(originalString); // Outputs: "   Hello, World!   "
console.log(trimmedString);  // Outputs: "Hello, World!"

let = "
5.5, 2.5, 4.0, 1.3, 0, 1, 0
6.3, 3.3, 6.0, 2.5, 0, 0, 1
5.8, 2.7, 5.1, 1.9, 0, 0, 1
7.1, 3.0, 5.9, 2.1, 0, 0, 1
6.3, 2.9, 5.6, 1.8, 0, 0, 1
"

let fs = require('fs');
let all = fs.readFileSync('iris_five.txt', "utf8");
all = all.trim();  // final crlf in file
let lines = all.split("\n");
let n = lines.length;
let m = matrixMake(n, 7, 0.0);  // numeric

for (let i = 0; i < n; ++i) {  // each line
  let tokens = lines[i].split(",");
  for (let j = 0; j < 7; ++j) {  // each val curr line
    m[i][j] = parseFloat(tokens[j]);
  }
}
matrixPrint(m, 1);  // 1 decimal


let fs = require('fs');
function loadTxt(fn, delimit, usecols) {
  let all = fs.readFileSync(fn, "utf8");  // giant string
  all = all.trim();  // strip final crlf in file
  let lines = all.split("\n");
  let rows = lines.length;
  let cols = usecols.length;
  let result = matrixMake(rows, cols, 0.0); 
  for (let i = 0; i < rows; ++i) {  // each line
    let tokens = lines[i].split(delimit);
    for (let j = 0; j < cols; ++j) {
      result[i][j] = parseFloat(tokens[usecols[j]]);
    }
  }
  return result;
}

data_x = loadTxt(".\\iris_train.txt", ",", [0,1,2,3]);
data_y = loadTxt(".\\iris_train.txt", ",", [4,5,6]); 
*/


5.5, 2.5, 4.0, 1.3, 0, 1, 0
6.3, 3.3, 6.0, 2.5, 0, 0, 1
5.8, 2.7, 5.1, 1.9, 0, 0, 1
7.1, 3.0, 5.9, 2.1, 0, 0, 1
6.3, 2.9, 5.6, 1.8, 0, 0, 1


let makeMatrix = (path) => {
    // path = './PathSumFourWays/test.txt'
    let data = fs.readFileSync(path, 'utf8')
    let d = data.trim()
    let lines = d.split("\n");
    let len = lines.length

    let matrix = []
    for(let i = 0; i < len; i++) {
        let line = lines[i]
        let row = []
        for(let j = 0; j < len; j++) {
            let l = Number(line.split(',')[j])
            row.push(l)
        }
        matrix.push(row)
    }
    return matrix
}

let path = './PathSumFourWays/test.txt'
console.log(makeMatrix(path))
