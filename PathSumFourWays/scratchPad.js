

function pathSumFourWays(m) {
    let sum = 0
    let g = {}, n = {}, p = {}
    g['s'] = ['00']
    n['s'] = 0
    p['s'] = 0
    let l = m.length - 1

    for(let i = 0; i <= l; i++) {
        for(let j = 0; j <= l; j++) {
            let k = `${i}${j}`;
            if (i+1 <= l)  g[k] !== undefined ? g[k].push(`${i+1}${j}`) : g[k] = [`${i+1}${j}`] 
            if (j+1 <= l)  g[k] !== undefined ? g[k].push(`${i}${j+1}`) : g[k] = [`${i}${j+1}`]  
            if (i-1 >= 0)  g[k] !== undefined ? g[k].push(`${i-1}${j}`) : g[k] = [`${i-1}${j}`] 
            if (j-1 >= 0)  g[k] !== undefined ? g[k].push(`${i}${j-1}`) : g[k] = [`${i}${j-1}`] 
            sum += m[i][j]
        }
    }

    for(let i = 0; i <= l; i++) {
        for(let j = 0; j <= l; j++) {
            p[`${i}${j}`] = 0
            n[`${i}${j}`] = m[i][j]
        }
    }

    let shortestPath = (p, n, g, s) => {
        let queue = [s]; // Initialize a queue with the starting node
        let visited = new Set(); // Keep track of visited nodes to avoid cycles
        visited.add(s);
        while(queue.length > 0) {
            let curNode = queue.shift()
            visited.add(curNode)
            let neighbours = g[curNode]
            if(neighbours) {
                let minNN = sum
                let minN = 'None'
                for(let neighbour of neighbours) {
                    if(visited.has(neighbour)) continue
                    if(n[neighbour] < minNN) {
                        minNN = n[neighbour] 
                        minN = neighbour
                        visited.add(minN)
                    } 
                }
                queue.push(minN)
                p[minN] = p[curNode] + n[minN]
            }
        }
    return p[`${l}${l}`];
    }
    return shortestPath(p, n, g, 's')
}


// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

console.log(pathSumFourWays(testMatrix))

