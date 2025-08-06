
function* sequenceGenerator() {
  const nums = [2, 4, 6, 7, 9, 11, 13, 15, 17, 19]; // Sample sequence
  for (let num of nums) yield num;
}


let prev2 = null;
let prev1 = null;

for (let curr of sequenceGenerator()) {
  if (prev2 !== null && prev1 !== null) {
    if (prev1 - prev2 === curr - prev1) {
      console.log(`Found arithmetic triplet: ${prev2}, ${prev1}, ${curr}`);
    }
  }
  // Shift the window
  prev2 = prev1;
  prev1 = curr;
}






/*
let prev2 = null;
let prev1 = null;

for (let curr of sequenceGenerator()) {
  if (prev2 !== null && prev1 !== null) {
    if (prev1 - prev2 === curr - prev1) {
      console.log(`Found arithmetic triplet: ${prev2}, ${prev1}, ${curr}`);
    }
  }
  // Shift the window
  prev2 = prev1;
  prev1 = curr;
}
*/

/*
const window = [];

for (let curr of sequenceGenerator()) {
  window.push(curr);
  if (window.length === 3) {
    const [a, b, c] = window;
    if (b - a === c - b) {
      console.log(`Found arithmetic triplet: ${a}, ${b}, ${c}`);
    }
    window.shift(); // Remove the first element
  }
}
  */
