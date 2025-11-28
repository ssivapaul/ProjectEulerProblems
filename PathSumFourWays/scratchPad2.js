
const fs = require('fs');
const M1 = [
  [3, 0, 0, 10],
  [1, 9, 4, 1],
  [3, 3, 4, 2],
  [7, 6, 4, 2],
];

const M3 = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

const M2 = [
  [3, 0, 0, 6, 1, 4],
  [1, 9, 4, 1, 2, 5],
  [3, 3, 4, 2, 2, 7],
  [7, 6, 4, 2, 4, 1],
  [5, 1, 8, 6, 4, 9],
  [1, 6, 4, 0, 2, 5],
];

function pathSumFourWays(m) {
    let sum = 0, l = m.length - 1
    let g = {}, n = {}, p = {}

    // Find graph
    for(let i = 0; i <= l; i++) {
        for(let j = 0; j <= l; j++) {
            let k = `${i},${j}`;
            if (i<l) g[k] !== undefined ? g[k].push(`${i+1},${j}`) : g[k] = [`${i+1},${j}`] 
            if (j<l) g[k] !== undefined ? g[k].push(`${i},${j+1}`) : g[k] = [`${i},${j+1}`]  
            if (i>0) g[k] !== undefined ? g[k].push(`${i-1},${j}`) : g[k] = [`${i-1},${j}`] 
            if (i>0) g[k] !== undefined ? g[k].push(`${i},${j-1}`) : g[k] = [`${i},${j-1}`] 
            
            p[k] = (k == '0,0') ? p[k] = m[i][j] : Infinity // Fill Path object with Infinity except first item
            n[k] = m[i][j] // Fill all nodes with matrix elements
        }
    }
// Build path using priority queue. Exist as soon as it hit last element
    let BFS = (p, n, g) => {
        let q = [['0,0', p['0,0']]]; 
        while(q.length > 0) {
            q.sort((a, b) => a[1] - b[1])
            let [xy, N] = q.shift()
            let nrs = g[xy]
            for(let nr of nrs) { // nr-Neighbor, nrs-Neighbours
                if(`${l},${l}` == nr) return N + n[nr]
                if(p[nr] > N + n[nr]) {
                    p[nr] = N + n[nr] // Update 
                    console.log(nr, p[nr])
                    q.push([nr, p[nr]]) // and push node to queue
                }
            }
        }
        
        return 0;
    }
    return BFS(p, n, g)
}


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

let path = './PathSumFourWays/m.txt'
let M = makeMatrix(path)
console.time("PathSumFourWays")
console.log(pathSumFourWays(M))
console.timeEnd("PathSumFourWays")

// testMatrix1 ---> 2297
// testMatrix1 ---> 425185
