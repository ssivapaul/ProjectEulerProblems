

const fs = require('fs');
function pathSumFourWays(matrix) {
    const n = matrix.length;
    const dist = {};
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            dist[`${i},${j}`] = Infinity;

    dist["0,0"] = matrix[0][0];
    const pq = [[matrix[0][0], 0, 0]];

    while (pq.length) {
        pq.sort((a,b) => a[0] - b[0]); 
        let [d, x, y] = pq.shift();
        
        if (x === n-1 && y === n-1) return d;
        if (d > dist[`${x},${y}`]) continue;
        for (let [dx, dy] of dirs) {
            let nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            let nd = d + matrix[nx][ny];
            let key = `${nx},${ny}`;
            if (nd < dist[key]) {
                console.log(nx,ny,nd)
                dist[key] = nd;
                pq.push([nd, nx, ny]);
            }
        }
    }
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
