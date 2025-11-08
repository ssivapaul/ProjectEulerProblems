

function passcodeDerivation(arr) {
  // Ensure everything is treated as strings (preserves leading zeros)
  arr = arr.map(String);
  // Build directed graph
  const graph = {};
  const indegree = {};

  for (let code of arr) {
    for (let char of code) {
      if (!(char in graph)) graph[char] = new Set();
      if (!(char in indegree)) indegree[char] = 0;
    }

    for (let i = 0; i < code.length - 1; i++) {
      const a = code[i], b = code[i + 1];
      if (!graph[a].has(b)) {
        graph[a].add(b);
        indegree[b]++;
      }
    }
  }

  // Topological sort
  const queue = Object.keys(indegree).filter(k => indegree[k] === 0);
  let key = "";
 

  while (queue.length) {
    const node = queue.shift();
    key += node;
    for (let next of graph[node]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return Number(key);
}


//let keylog1 = [ 319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716, ];
let keylog2 = [ 123, 348, 567, 120, 305, 056, 230, 356, 167, 307 ]; // Expected output: 1230567
//let keylog3 = [ 731, 316, 628, 289, 890, 716, 731, 731, 628, 90  ]; // Expected output: 73162890

//console.log("keylog3:", passcodeDerivation(keylog3))
console.log("keylog2:", passcodeDerivation(keylog2))
//console.log("keylog1:", passcodeDerivation(keylog1))