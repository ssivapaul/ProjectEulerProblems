

const keylog1 = [ 319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716, ];

console.time("PassCode")
let keylogS = new Set() // To store unique keys
let keylogA = [] // To store unique keys
let digitS = new Set() // To store unique digits
let digitA = []
let graph = {}
for(let key of keylog1) keylogS.add(String(key))
keylogA = Array.from(keylogS)
keylogA.forEach(keys => String(keys).split("").forEach(key => digitS.add(key.toString())))
digitA = Array.from(digitS)
digitA.forEach(d => {
    for(key of keylogA) {
        for(let i = 0; i < 2; i++) {
            if(d == key[i]) {
                if(graph[d] == undefined) {
                    graph[d] = new Set(key[i+1])
                } else{
                    graph[d].add(key[i+1])
                }
            }
        }
    }
})
for([i, v] of  Object.entries(graph)) graph[i] = [...v]
console.log(graph)


let dfsIterative = (graph, startNode) => {
  let stack = [startNode]; // Initialize stack with the starting node
  let visited = new Set();
  visited.add(startNode);

  let traversalPath = [];

  while (stack.length > 0) {
    let currentNode = stack.pop(); // Pop the last node
    traversalPath.push(currentNode);

    let neighbors = graph[currentNode] || [];
    // Iterate neighbors in reverse to maintain typical DFS order if desired
    for (let i = neighbors.length - 1; i >= 0; i--) {
      let neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor); // Push unvisited neighbors onto the stack
      }
    }
  }
  return traversalPath;
}

console.log(dfsIterative(graph, '7'))
console.timeEnd("PassCode")