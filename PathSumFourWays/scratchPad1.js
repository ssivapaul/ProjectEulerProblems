const { min } = require("bignumber.js");

const M1 = [
  [3, 0, 0, 10],
  [1, 9, 4, 1],
  [3, 3, 4, 2],
  [7, 6, 4, 2],
];

const M = [
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
let l = M.length - 1


sum = 0
let g = {}
g['start'] = ['00']
let n = {}
n['start'] = 0
let p = {}
p['start'] = 0

for(let i = 0; i <= l; i++) {
    for(let j = 0; j <= l; j++) {
        let k = `${i}${j}`;
        if (i+1 <= l)  g[k] !== undefined ? g[k].push(`${i+1}${j}`) : g[k] = [`${i+1}${j}`] 
        if (j+1 <= l)  g[k] !== undefined ? g[k].push(`${i}${j+1}`) : g[k] = [`${i}${j+1}`]  
        if (i-1 >= 0)  g[k] !== undefined ? g[k].push(`${i-1}${j}`) : g[k] = [`${i-1}${j}`] 
        if (j-1 >= 0)  g[k] !== undefined ? g[k].push(`${i}${j-1}`) : g[k] = [`${i}${j-1}`] 
        sum += M[i][j]
    }
}
console.log(g)

for(let i = 0; i <= l; i++) {
    for(let j = 0; j <= l; j++) {
        p[`${i}${j}`] = sum+1
        n[`${i}${j}`] = M[i][j]
    }
}
// Path: Initialised with max value
// 
let BFS = (path, node, graph, start) => {
    let queue = [start]; // Initialize a queue with the starting node
    let visited = new Set(); // Keep track of visited nodes to avoid cycles
    visited.add(start);
    let result = []; // Array to store the order of visited nodes

    while(queue.length > 0) {
        let curNode = queue.shift()
        visited.add(curNode)
        let neighbours = graph[curNode]
        if(neighbours) {
            for(let neighbour of neighbours) {
                if(!visited.has(neighbour)) {
                    if(path[neighbour] > path[curNode] + node[neighbour]) {
                        path[neighbour] = path[curNode] + node[neighbour]
                    }
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
                console.log(path)
            }
        }
    }
    return Object.entries(path);
}
/*
const M = [
  [3, 0, 0, 6, 1, 4],
  [1, 9, 4, 1, 2, 5],
  [3, 3, 4, 2, 2, 7],
  [7, 6, 4, 2, 4, 1],
  [5, 1, 8, 6, 4, 9],
  [1, 6, 4, 0, 2, 5],

];
*/
console.log("Result: ", BFS(p, n, g, 'start'))
//console.log(sum)
//console.log("Path: ", p)
//console.log("Node: ", n)
//console.log("Graph: ", g)
