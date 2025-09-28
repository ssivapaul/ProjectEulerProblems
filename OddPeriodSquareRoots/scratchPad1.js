
let x = .2564866
let y = .2564755
let a = x.toFixed(4)
let b = y.toFixed(4)

console.log(a === b)
console.log(x === y)

let findContinuousSameItems = (arr) => {
  const result = [];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      result.push(currentSequence);
      currentSequence = [arr[i]];
    }
  }

  result.push(currentSequence);

  return result;
}
