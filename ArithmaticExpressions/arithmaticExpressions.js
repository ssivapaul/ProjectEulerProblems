

function arithmeticExpressions() {
  let  replPerm = (arr, size) => {
    const result = [];
    let permute = (cPerm) => {
      if (cPerm.length === size) {
        result.push([...cPerm]);
          return;
      }
      for (let i = 0; i < arr.length; i++) {
        cPerm.push(arr[i]);
        permute(cPerm);
        cPerm.pop(); // Backtrack
      }
    }
    permute([]);
    return result;
  }
//-----------------------------------------------
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
//-----------------------------------------------
  let  nCr = (arr, r) => {
    let result = [];
    //let n = arr.length;
    let backTrack = (comb, rem) => {
      if (comb.length === r) {
        result.push([...comb]); // Add a copy of the current combination to the result
        return;
      }
      for (let i = 0; i < rem.length; i++) {
        comb.push(rem[i])
        let nRem = rem.slice(i+1)
        backTrack(comb, nRem)
        comb.pop();
      }
    }
    backTrack([], arr);
    return result;
  }
//--------------------------------------------------
  let opn = (opn1, opr, opn2) => {
    let result = 0
    switch (opr) {
      case '+' : result = opn1 + opn2
      break
      case '-' : result = opn1 - opn2
      break
      case '*' : result = opn1 * opn2
      break
      case '/' : result = opn1 / opn2
      break
    }
    return result
  }
//-------------------------------------------------
//Main loop
  let maxOpnd = []
  let opndNCR = nCr([1, 2, 3, 4, 5, 6, 7, 8, 9], 4) 
  for(let opndNcr of opndNCR) {
    let P = []
    let pMax = []
    let opnd = lPerm(opndNcr, 4)
    let oper = replPerm(['+', '-', '*', '/'], 3)
    for(let [a, b, c, d] of opnd) {
      for(let [op1, op2, op3] of oper) {
        let opn1 = opn(opn(a, op1, b), op2, opn(c, op3, d)) // ((a op1 b) op3 (a op1 b))
        let opn2 = opn(opn(opn(a, op1, b), op2, c), op3, d) // (((a op1 b) op2 c) op3 d)
        let opn3 = opn(opn(a, op1, opn(b, op2, c)), op3, d) // ((a op1 (b op2 c)) op3 d))
        let opn4 = opn(a, op1, opn(opn(b, op2, c), op3, d)) // (a op1 ((b op2 c) op3 d))
        let opn5 = opn(a, op1, opn(b, op2, opn(c, op3, d))) // (a op1 (b op2 (c op3 d)))
        // Filter out integers only
        P.push(...[opn1, opn2, opn3, opn4, opn5].filter(x => Number.isInteger(x) && x >  0)) 
      }
      let uniqP = [...new Set(P)]; // remove duplicates]
      let pSort = uniqP.sort((a, b) => a - b)
      let max = 0
      for(let i = 0; i < pSort.length; i++) {
        if(i+1 == pSort[i]) max++
          else break
      }
      pMax.push([max, opnd[0].join('')])
    }
    let PSort = pMax.sort((a, b) => b[0] - a[0])
    let maxMax = PSort[0]
    maxOpnd.push(maxMax)
  }
  let maxSort = maxOpnd.sort((a, b) => b[0] - a[0])
  return Number(maxSort[0][1])
}

console.log(arithmeticExpressions());