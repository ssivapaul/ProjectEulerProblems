
let passcodeDerivation = (arr) => { 
    // Helper function
    let  dfsR = (gph, sNode) => {
        let vstd = new Set();
        let tPath = [];
        let traceDF = (cNode) => {
        vstd.add(cNode);
        tPath.push(cNode);
        let nbors = gph[cNode] || [];
        for (let nbor of nbors) {
            if (!vstd.has(nbor)) {
            traceDF(nbor); 
      }
    }
  }
  traceDF(sNode);
  return tPath;
}
//---------------------------------------
    let arrS = new Set()
    let arrA = []
    let gP = {}, keys = {}
    for(let i = 0; i < arr.length; i++) {
        arrS.add(String(arr[i]))
    }
    arrA = Array.from(arrS)
    for(let ar of arrA) {
        for(let i = 0; i < ar.length - 1; i++) {
            let j = i 
            while(ar[++j]) {
                (gP[ar[i]] == undefined) ? gP[ar[i]] = new Set(ar[j]) : gP[ar[i]].add(ar[j])
            }
        }
    }
    for(let k in gP) gP[k] = [...gP[k]]
    for(let k in gP) keys[k] = dfsR(gP, k).length
    let lastK = 0
    for(let k in gP) if(gP[k].size == 1) lastK = k
    let sortedK = Object.entries(keys).sort((b, a) => (a[1] - b[1]))
    sortedK = sortedK.map(s => (s[0])).concat(lastK).join('')
    sortedK = Number(sortedK)
    console.log(typeof(sortedK))
    return sortedK; 
}

const keylog1 = [ 319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716, ];
const keylog2 = [ 123, 348, 567, 120, 305, 056, 230, 356, 167, 307 ]; // Expected output: 1230567
const keylog3 = [ 731, 316, 628, 289, 890, 716, 731, 731, 628, 90 ]; // Expected output: 73162890

console.log(passcodeDerivation(keylog1))
