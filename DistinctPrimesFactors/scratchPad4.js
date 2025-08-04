
/*
// Main routine
let consecutive = 0;
let i = 2;
while (true) {
  if (getDistinctPrimeFactors(i) === targetNumPrimes) {
    consecutive++;
  } else {
    if (consecutive === targetConsecutive) {
      // streak just ended after exact match
      return i - targetConsecutive;
    }
    consecutive = 0;
  }
  i++;
}
*/

//---------------------------------
let consecutive = 0;
let i = 2;
let streakStart = 2;

while (true) {
  if (getDistinctPrimeFactors(i) === targetNumPrimes) {
    if (consecutive === 0) streakStart = i;
    consecutive++;
  } else {
    if (consecutive === targetConsecutive) {
      return streakStart;
    }
    consecutive = 0;
  }
  i++;
}
