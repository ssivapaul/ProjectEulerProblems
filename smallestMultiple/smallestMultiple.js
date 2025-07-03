

let greatedCommonDiviser = (a, b) => {
    while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    }
  return a;
}

let leastCommonMultiple = (a, b) => {
  return (a * b) / greatedCommonDiviser(a, b);
}

let  findLCM = (denominators) => {
  let LCM = denominators[0];
  for (let i = 1; i < denominators.length; i++) {
    LCM = leastCommonMultiple(LCM, denominators[i]);
  }
  return LCM;
}

let generateArrayFrom1Ton = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function smallestMult(n) {
  let numArray = generateArrayFrom1Ton(n);
  let result = findLCM(numArray)
  return result;
}

console.log(smallestMult(20));