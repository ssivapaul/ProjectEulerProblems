function passcodeDerivation(arr) {
  arr = arr.map(String); // Ensure string form
  const nodes = new Set();
  const edges = new Map();
  const inDegree = new Map();

  // Initialize graph structure
  arr.forEach(code => {
    code.split('').forEach(ch => {
      nodes.add(ch);
      if (!edges.has(ch)) edges.set(ch, new Set());
      if (!inDegree.has(ch)) inDegree.set(ch, 0);
    });
  });

  // Build ordering constraints
  arr.forEach(code => {
    let [a, b, c] = code.split('');
    // a → b
    if (!edges.get(a).has(b)) {
      edges.get(a).add(b);
      inDegree.set(b, inDegree.get(b) + 1);
    }
    // b → c
    if (!edges.get(b).has(c)) {
      edges.get(b).add(c);
      inDegree.set(c, inDegree.get(c) + 1);
    }
  });

  // Topological sort
  let result = '';
  let queue = [...[...nodes].filter(n => inDegree.get(n) === 0)];

  while (queue.length > 0) {
    queue.sort(); // not required but stable
    let ch = queue.shift();
    result += ch;

    for (let nxt of edges.get(ch)) {
      inDegree.set(nxt, inDegree.get(nxt) - 1);
      if (inDegree.get(nxt) === 0) queue.push(nxt);
    }
  }

  return Number(result);
}
