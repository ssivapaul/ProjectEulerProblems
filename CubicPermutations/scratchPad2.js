function cubicPermutations(n) {
  let c = 1;
  let obP = {};
  let currentDigit = 1;

  while (true) {
    let cube = c ** 3;
    let sCU = String(cube);

    // if we reached the next digit length
    if (sCU.length > currentDigit) {
      // check all completed groups for a solution
      for (let key in obP) {
        if (obP[key].count === n) {
          return obP[key].first;
        }
      }
      // reset for the new digit length
      obP = {};
      currentDigit = sCU.length;
    }

    // signature = sorted digits
    let sorCU = [...sCU].sort().join('');

    if (!obP[sorCU]) {
      obP[sorCU] = { count: 1, first: cube };
    } else {
      obP[sorCU].count++;
      if (obP[sorCU].count === n) {
        return obP[sorCU].first; // always the smallest cube
      }
    }

    c++;
  }
}


console.time("Cube")
console.log(cubicPermutations(2)); // 125
console.log(cubicPermutations(3)); // 41063625
console.log(cubicPermutations(4)); // 1006012008
console.log(cubicPermutations(5)); // 127035954683
console.timeEnd("Cube")


