function magic5GonRing() {
// Helper function
  let lPerm = (arr, k) => {
    let result = [];
    let perm = (cPerm, rItems) => {
      if (cPerm.length === k) {
        result.push(cPerm);
        return;
      }
      for (let i = 0; i < rItems.length; i++) {
        let nextItem = rItems[i];
        let nRItems = rItems.slice(0, i).concat(rItems.slice(i + 1));
        perm(cPerm.concat(nextItem), nRItems);
      }
    }
    perm([], arr);
    return result;
  }
  // Helper function
  let cPerm = (items, r) => {
    items = items.split('')
    let lPerms = lPerm(items, r);
    let cPerms = new Map();
    let seenUnique = new Set();
    for (let perm of lPerms) {
      let rotations = [];
      for (let i = 0; i < r; i++) {
        let rotatedPerm = perm.slice(i).concat(perm.slice(0, i));
        rotations.push(rotatedPerm.join(''));
      }
      rotations.sort();
      let unique = rotations[0];
      if (!seenUnique.has(unique)) {
        let p = [...perm,  perm[0]] // Add start to tail
        let cP = []
        for(let i = 0; i < p.length - 1; i++) {
          let sP = [Number(p[i]), Number(p[i+1])]
          cP.push(sP)
        }
        let tipComb = items.filter(el => !perm.includes(el)).map(Number)
        tipComb = [...tipComb, 10]
        cPerms.set(cP, tipComb)
        seenUnique.add(unique);
      }
    }
    return cPerms; // In map form
  }

// Main routine starts here
    let numbers = '123456789';
    let r = 5;
    let p9P5 = cPerm(numbers, r); // Map of External and Internal nodes
    let arr9P5 = Array.from(p9P5)
    
    let cpp = []
    for(let [k, v] of arr9P5) {
        let lP = lPerm(v, v.length)    
        for(p of lP) {
            let t = p[0] + k[0][0] + k[0][1]
            let i = 0
            while(++i < 5) {
                if( t !== p[i] + k[i][0] + k[i][1]) break
            }
            if(i === 5) cpp.push([p, k]) // Found 5-Gong ring
        }
    }
    let ccpp = []
    for([c, p] of cpp) {
        let cppp = [] // To store the group of numbers
        for(let i = 0; i < p.length; i++) {
            let cp = [c[i], ...p[i]].join('') 
            cppp.push(Number(cp))
        }
        let minOuter = Math.min(...cppp)
        let startIndex = cppp.findIndex(g => g === minOuter)
        let ordered = cppp.slice(startIndex).concat(cppp.slice(0, startIndex))
        let joined = ordered.join('')
        ccpp.push(joined)
    }
    let ccppN = ccpp.map(Number)  
    let maxMagic16 = Math.max(...ccppN)
    return maxMagic16
}




console.time("Magic5")
console.log(magic5GonRing());
console.timeEnd("Magic5")