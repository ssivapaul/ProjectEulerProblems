


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
                if (!vstd.has(nbor)) traceDF(nbor); 
            }
        }
        traceDF(sNode);
        return tPath;
    }
//---------------------------------------
    let gP = {}
    arr = arr.map(String) //  <--- bug in this line,  056 ---> '46' Not, 056 ---> '056'
    for(let a of arr) {
        for(let i = 0; i < a.length - 1; i++) {
            let curr = a[i], next = a[i+1]
            if(!(gP[curr] == undefined)) {
                if(!gP[curr].includes(next)) gP[curr].push(next)                    
            } else {
                gP[curr] = [next]
            }
        }
    }

    let key = {}
    let keyCount = {}
    let lastKey = ''    
    for(let k in gP) {
        let dfs = dfsR(gP, k)
        keyCount[k] = dfs.length
        key[k] = dfs.join('')
    }

    let keys = Object.entries(keyCount).sort((a, b) => (b[1] - a[1])) 
    for(let k in gP) if(gP[k].length == 1) lastKey = gP[k]
    keys = Number(keys.map(k => k[0]).concat(lastKey).join(''))
    return keys;  
}

//let keylog1 = [ 319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716, ];
let keylog2 = [ 123, 348, 567, 120, 305, 056, 230, 356, 167, 307 ]; // Expected output: 1230567
//let keylog3 = [ 731, 316, 628, 289, 890, 716, 731, 731, 628, 90  ]; // Expected output: 73162890

//console.log("keylog3:", passcodeDerivation(keylog3))
console.log("keylog2:", passcodeDerivation(keylog2))
//console.log("keylog1:", passcodeDerivation(keylog1))
