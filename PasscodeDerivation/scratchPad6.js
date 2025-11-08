
function passcodeDerivation(arr) {
  // Build nodes, adjacency (edges) and indegree maps
  const nodes = new Set();
  const edges = new Map();   // node -> Set(of successors)
  const indeg = new Map();   // node -> number

  // Collect nodes and build edges (avoid duplicate edges)
  for (const code of arr) {
    const s = String(code);
    // register all characters
    for (const ch of s) {
      nodes.add(ch);
      if (!edges.has(ch)) edges.set(ch, new Set());
      if (!indeg.has(ch)) indeg.set(ch, 0);
    }
    // add ordering edges a -> b for consecutive chars in each triple
    for (let i = 0; i < s.length - 1; i++) {
      const a = s[i], b = s[i+1];
      if (!edges.get(a).has(b)) {
        edges.get(a).add(b);
        indeg.set(b, indeg.get(b) + 1);
      }
    }
  }

  // Kahn's topological sort
  // start with nodes that have indegree 0, sorted to be deterministic
  const zero = [...nodes].filter(n => indeg.get(n) === 0).sort();
  const q = zero;
  const result = [];

  while (q.length > 0) {
    // deterministic: remove from front (already sorted)
    const n = q.shift();
    result.push(n);

    for (const m of edges.get(n)) {
      indeg.set(m, indeg.get(m) - 1);
      if (indeg.get(m) === 0) {
        q.push(m);
      }
    }
    // keep queue deterministic
    q.sort();
  }

  return Number(result.join(''));
}
