let getPerm = (str) => {
    let p = []
    let s = ''
    for(let i = 0; i < str.length; i++) {
        let a = str[i]
        let b = str.slice(0, i) + str.slice(i+1)
        for(let j = i; j < str.length - 1; j++) {
          
        }
    }
}

//console.log(getPerm('abcd'))

function getPermutations(arr) {
  let result = [];

  function backtrack(cP, rE) {
    if (rE.length === 0) {
      return result.push(cP.slice()); 
    }

    for (let i = 0; i < rE.length; i++) {
      let el = rE[i];

      if (i > 0 && rE[i] === rE[i - 1]) {
        continue;
      }
      cP.push(el);
      const newRE = rE.slice(0, i).concat(rE.slice(i + 1));
      backtrack(cP, newRE);
      cP.pop();
    }
  }

  let sortedArr = arr.slice().sort((a, b) => a - b);
  backtrack([], sortedArr);
  return result;
}

// Example usage:
const numbers = [1, 2, 3];
//const permutations = getPermutations(numbers);
//console.log(permutations);


function getPermutationsIterative(str) {
  if (str.length === 0) {
    return [""];
  }

  let permutations = [""]; // Start with an empty string as the base
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let newPermutations = [];
    for (let j = 0; j < permutations.length; j++) {
      let currentPerm = permutations[j];
      for (let k = 0; k <= currentPerm.length; k++) {
        let newPerm = currentPerm.slice(0, k) + currentChar + currentPerm.slice(k);        
        newPermutations.push(newPerm);
        
      }
    }
    permutations = newPermutations;
  }
  return permutations;
}

const myString = "abc";
//const result = getPermutationsIterative(myString);
//console.log(result);


function permute(str) {
  let result = [];

  function generatePermutation(prefix, remaining) {
    if (remaining.length === 0) {
      return result.push(prefix);
    }

    for (let i = 0; i < remaining.length; i++) {
      let nextPrefix = prefix + remaining[i];
      let nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      generatePermutation(nextPrefix, nextRemaining);
    }
  }

  generatePermutation('', str);
  return result;
}

// Example:
//console.log(permute("abc"));


function permuteUnique(str) {
  let result = [];
  let chars = str.split('').sort(); // Sort to group duplicates

  function backtrack(path, used) {
    if (path.length === chars.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;

      // Skip duplicates
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(chars[i]);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(chars.length).fill(false));
  return result;
}

// Example:
//console.log(permuteUnique("aabc"));

function permuteIterative(str) {
  const chars = str.split('');
  const n = chars.length;
  const result = [];
  const c = new Array(n).fill(0); // Control array
  
  result.push(chars.join(''));

  let i = 0;
  while (i < n) {
    if (c[i] < i) {
      // Swap depends on whether i is even or odd
      const swapIdx = i % 2 === 0 ? 0 : c[i];
      [chars[i], chars[swapIdx]] = [chars[swapIdx], chars[i]];
      result.push(chars.join(''));
      console.log(c, chars.join(''), i, swapIdx)
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i++;
    }
  }
  return result;
}

// Example:
//console.log(permuteIterative("01234"));
//permuteIterative("0123")

let perm = (s) => {
    result = []
    
    for(let i = 0; i < s.length; i++) {

    }
}

s = 'abc'
console.log(perm(s))