
let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false; 
  }
  return true;
}

/*
function getPer(str) {
  let r = [];
  if (str.length <= 1) return [str];

  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    let rC = str.slice(0, i) + str.slice(i + 1); 
    let subPer = getPer(rC);
    for (let subP of subPer) r.push(c + subP);
  }
  return r;
}

let  P = (str) => {
    let result = []
    let getPer = (p, s) => {
        if (s == '') result.push(p);

        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            let rC = s.slice(0, i) + s.slice(i + 1); 
            let newPer = p + c
            getPer(newPer, rC)
        }
        return result  
    }
    return getPer('', str)
}

console.log(P('1234'))
*/

console.time("myFunction");

let prime = []
let window = []

for(let i = 1488; true; i++) {
    let a = i
    let b = a + 3330
    let c = b + 3330

    if(isPrime(a) && isPrime(b) && isPrime(c)) {
        let sA = String(a).split('').sort((a, b) => (a-b)).join('')
        let sB = String(b).split('').sort((a, b) => (a-b)).join('')
        let sC = String(c).split('').sort((a, b) => (a-b)).join('')
        if(sA === sB && sB === sC) {
            let d = Number(String(a) + String(b) + String(c))
            console.log(d)
            console.log(typeof(d))
            break
        }

    }
}

console.timeEnd("myFunction");

/*
console.time("myFunction");
    // Your code here
console.timeEnd("myFunction");
*/