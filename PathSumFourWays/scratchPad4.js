class PriorityQueue {
    constructor() { this.elements = []; }
    enqueue(node, priority) {
        this.elements.push({ node, priority });
        this.elements.sort((a, b) => a.priority - b.priority); 
    }
    dequeue() { return this.elements.shift(); }
    isEmpty() { return this.elements.length === 0; }
}

function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();
    for (const node in graph) { distances[node] = Infinity; }
    distances[start] = 0;
    pq.enqueue(start, 0);
    while (!pq.isEmpty()) {
        const { node: currentNode, priority: currentDistance } = pq.dequeue();
        if (currentDistance > distances[currentNode]) continue;
        for (const neighbor of graph[currentNode]) {
            const newDist = distances[currentNode] + neighbor.weight;
            if (newDist < distances[neighbor.node]) {
                distances[neighbor.node] = newDist;
                pq.enqueue(neighbor.node, newDist);
            }
        }
    }

    return distances;
}

// Example usage:
const graph = {
    'A': [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
    'B': [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
    'C': [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
    'D': [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }]
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances); // Expected: { A: 0, B: 1, C: 3, D: 4 }
