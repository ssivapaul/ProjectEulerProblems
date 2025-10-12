

let cirPerm = (arr) => {
  const result = [];
  const n = arr.length;

  // Start with a fixed element to avoid rotational duplicates
  const fixEl = arr[0];
  const rEls = arr.slice(1);

  // Generate permutations of the remaining elements
  let gPerm = (curPerm, rem) => {
    if (rem.length === 0) {
      result.push([fixEl, ...curPerm]);
      return;
    }

    for (let i = 0; i < rem.length; i++) {
      const nextEl = rem[i];
      const nRem = rem.slice(0, i).concat(rem.slice(i + 1));
      gPerm(curPerm.concat(nextEl), nRem);
    }
  }

  gPerm([], rEls);
  return result;
}

// Example usage:
const items = [1, 2, 3,7];
const circularPerms = cirPerm(items);
console.log(circularPerms);
// Expected output (order may vary):
// [ [ 1, 2, 3 ], [ 1, 3, 2 ] ]
