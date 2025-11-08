
function bfs(graph, startNode) {
  const queue = [startNode]; // Initialize queue with the starting node
  const visited = new Set(); // Keep track of visited nodes to avoid cycles
  visited.add(startNode);

  const traversalPath = []; // To store the order of visited nodes

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue the first node
    traversalPath.push(currentNode);

    // Get neighbors of the current node
    const neighbors = graph[currentNode] || []; 

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue unvisited neighbors
      }
    }
  }
  return traversalPath;
}

// Example Usage:
const graphBFS = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

console.log("BFS Traversal:", bfs(graphBFS, 'A')); // Expected: ['A', 'B', 'C', 'D', 'E', 'F']

function dfsRecursive(graph, startNode) {
  const visited = new Set();
  const traversalPath = [];

  function explore(currentNode) {
    visited.add(currentNode);
    traversalPath.push(currentNode);

    const neighbors = graph[currentNode] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        explore(neighbor); // Recursively call for unvisited neighbors
      }
    }
  }

  explore(startNode);
  return traversalPath;
}

// Example Usage:
const graphDFS = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

console.log(dfsRecursive(graphDFS, 'A')); // Expected (example): ['A', 'B', 'D', 'E', 'F', 'C']

function dfsIterative(graph, startNode) {
  const stack = [startNode]; // Initialize stack with the starting node
  const visited = new Set();
  visited.add(startNode);

  const traversalPath = [];

  while (stack.length > 0) {
    const currentNode = stack.pop(); // Pop the last node
    traversalPath.push(currentNode);

    const neighbors = graph[currentNode] || [];
    // Iterate neighbors in reverse to maintain typical DFS order if desired
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor); // Push unvisited neighbors onto the stack
      }
    }
  }
  return traversalPath;
}

// Example Usage:
const graphDFS2 = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

//console.log("DFS Iterative Traversal:", dfsIterative(graphDFS2, 'A')); // Expected (example): ['A', 'C', 'F', 'E', 'B', 'D']