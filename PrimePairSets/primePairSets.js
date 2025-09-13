function primePairSets() {
  // Helper functions
  let isPrime = (n) => {
    if(n == 2) return true
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n%2 == 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false
    return true
  }
  let getPrime = (num) => {
    let p = [3, 5]
    for(let i = 1; i <= num; i++) {
        isPrime(i) ? p.push(i) : 0
    }
    return p
  }

  let  bronKerbosch = (R, P, X, graph, targetSize, results) => {
    if (R.length === targetSize) {
      results.push([...R]);
      return;
    }
    if (P.length === 0 && X.length === 0) return;

    for (let v of [...P]) {
      let newR = [...R, v];
      let neighbors = graph[v] || [];
      let newP = P.filter(u => neighbors.includes(u));
      let newX = X.filter(u => neighbors.includes(u));
      bronKerbosch(newR, newP, newX, graph, targetSize, results);
      P = P.filter(u => u !== v);
      X.push(v);
    }
  }

//Main routine
  let pGraph = {}
  let P = getPrime(10000) // Sufficient Primes to form just one 5-primePairSet
  for(let i = 0; i < P.length; i++) {
    for(let j = 0; j < P.length; j++) {
        let fP = Number(String(P[i]) + String(P[j]))
        let rP = Number(String(P[j]) + String(P[i]))
        if(isPrime(fP) && isPrime(rP)) {
            (pGraph[P[i]] == undefined) ? pGraph[P[i]] = [P[j]] : !pGraph[P[i]].includes(P[j]) ? pGraph[P[i]].push(P[j]) : 0
        }
    }
  }
/*
  delete p['3']
  delete p['7']
  delete p['11']
*/
  let  findCliquesOfSize = (graph, size) => {
    let results = [];
    let allNodes = Object.keys(graph).map(Number);
    bronKerbosch([], allNodes, [], graph, size, results);
    return results[0].reduce((a, c) => a+c, 0);
  }

  return findCliquesOfSize(pGraph, 5);  // find 5-cliques
}

console.time("Prime")
console.log(primePairSets());
console.timeEnd("Prime")