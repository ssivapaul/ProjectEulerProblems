function quadraticPrimes(range) {

  return range;
}

//quadraticPrimes(1000);

//---------------------------------------------
let is_Prime = (x) => {
  if (x <= 1)
    return false;

  for(let i = 2; i <= x / 2; i++) {
      if(x % i == 0) {
         return false;
      }
   }
  return true;
}
//-----------------------------------------------
let prime = []
let max_cnt = 0
let max_a = 0
let max_b = 0
let n = 42

for (let a = -n; a < n; a++) {
    for(let b = -n; b < n; b++) {
        
        let cnt = 0
        let l = []
        while(is_Prime(Math.pow(cnt, 2) + a*cnt + b)) {
            l.push(Math.pow(cnt, 2) - a*cnt + b)
            cnt++            
        }
        if(cnt > max_cnt) {
            max_cnt = cnt
            max_a = a
            max_b = b
            prime = l
        }
    }
}
console.log(prime, max_cnt, "a: ", max_a, "b: ", max_b, "Product: ", max_a*max_b)

let cnt = 0
let l = []
while(is_Prime(Math.pow(cnt, 2) + cnt + 41)) {
    l.push(Math.pow(cnt, 2) + cnt + 41)
    cnt++            
}
console.log(l)
