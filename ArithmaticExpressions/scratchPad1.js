
let permutation = (arr, r) => {
    let result = []
    let perm = (per, rem) => {
        if(per.length == r) {
            let p = per.join('')
            result.push(p)
            return
        }
        for(let i = 0; i < rem.length; i++) {
            perm(per.concat(rem[i]), rem.slice(0, i).concat(rem.slice(i)))
        }
    }
    
    perm([], arr)
    return result
}
//---------------------------------------------

let  nCr = (arr, r) => {
  let result = [];
  //let n = arr.length;
  let backTrack = (comb, rem) => {
    if (comb.length === r) {
      result.push([...comb]); // Add a copy of the current combination to the result
      return;
    }
    //for (let i = start; i < n; i++) {
    for (let i = 0; i < rem.length; i++) {
        comb.push(rem[i])
        let nRem = rem.slice(i+1)
        backTrack(comb, nRem)
      //comb.push(arr[i]);
      //backtrack(comb, i + 1);
      comb.pop();
    }
  }

  backTrack([], arr);
  return result;
}

let n = [1, 2, 3, 4];
let r = 2;
let result = nCr(n, r);
console.log(`Combinations of ${r} items from [${n}]:`);
console.log(result);
