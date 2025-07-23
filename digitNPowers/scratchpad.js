

function digitnPowers(n) {
  let sum = 0;
  let max = n * Math.pow(9, n); // upper bound

  for (let i = 10; i <= max; i++) {
    let digits = i.toString().split('').map(Number);
    let powerSum = digits.reduce((acc, d) => acc + Math.pow(d, n), 0);

    if (i === powerSum) {
      sum += i;
    }
  }

  return sum;
}

console.log(digitnPowers(5))

/*
let n = 4

let sum = 0
for(let i = 0; i <= 9; i++) {
    for(let j = 0; j <= 9; j++) {
        for(let k = 0; k <= 9; k++) {
            for(let m = 0; m <= 9; m++) {
                let t = (i*1000 + j*100 + k*10 + m)

                let s = Math.pow(i, n) + Math.pow(j, n) + Math.pow(k, n) + Math.pow(m, n)
                if( t == s && s !== 1) {
                    console.log(i, j, k, m)
                    sum += t
                }
            }
        }
    }
}
//console.log(sum)
console.log(Math.pow(0, 2))

*/
