

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
let getNextPrime = (curPrime) => {
    while(++curPrime) {
        if(isPrime(curPrime)) return curPrime
    }
}

let  bronKerbosch = (R, P, X, adj, targetSize, results) => {
  if (R.length === targetSize) {
    results.push([...R]);
    return;
  }
  if (P.length === 0 && X.length === 0) return;

  for (let v of [...P]) {
    let newR = [...R, v];
    let neighbors = adj[v] || [];
    let newP = P.filter(u => neighbors.includes(u));
    let newX = X.filter(u => neighbors.includes(u));
    bronKerbosch(newR, newP, newX, adj, targetSize, results);
    P = P.filter(u => u !== v);
    X.push(v);
  }
}

let p = {}
let P = getPrime(1000)
for(let i = 0; i < P.length; i++) {
    for(let j = 0; j < P.length; j++) {
        let fP = Number(String(P[i]) + String(P[j]))
        let rP = Number(String(P[j]) + String(P[i]))
        if(isPrime(fP) && isPrime(rP)) {
            (p[P[i]] == undefined) ? p[P[i]] = [P[j]] : !p[P[i]].includes(P[j]) ? p[P[i]].push(P[j]) : 0
        }
    }
}

console.log(p)
let  findCliquesOfSize = (obj, size) => {
  let results = [];
  let allNodes = Object.keys(obj).map(Number);
  bronKerbosch([], allNodes, [], obj, size, results);
  return results;
}

console.time("Prime")
let cliques4 = findCliquesOfSize(p, 4);  // find 4-cliques
//let cliques5 = findCliquesOfSize(p, 5);  // find 5-cliques

console.log(cliques4)
//console.log(cliques5)
console.timeEnd("Prime")