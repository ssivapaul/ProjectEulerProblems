function cubicPermutations(n) {
  let c = 1;
  let currentDigit = 1;
  let obP = {};

  while (true) {
    let cube = c ** 3;
    let sCU = String(cube);

    // If digit length increased, check previous digit's groups
    if (sCU.length > currentDigit) {
      for (let key in obP) {
        if (obP[key].length === n) {
          return Math.min(...obP[key]); // smallest cube in the group
        }
      }
      // reset for new digit length
      obP = {};
      currentDigit = sCU.length;
    }

    let sorCU = sCU.split('').sort().join('');
    obP[sorCU] = obP[sorCU] ? [...obP[sorCU], cube] : [cube];

    c++;
  }
}


