function digitFactorial() {
  let fact = (n) => {
    if (n ===1 || n === 0) return 1
    return n*fact(n-1)
  }

  var sum = 0;
  var numbers = [];
  for(let i = 10; i < 41000; i++) {
    let a = i
    let b = 0
    let s = 0
    while (a > 0) {
      b = a%10
      s += fact(b)
      a = Math.floor(a/10)
    }
    if (i === s) {
      sum += s
      numbers.push(s)
    }
  }
  return { sum, numbers };
}

console.log(digitFactorial());