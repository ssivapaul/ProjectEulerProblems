let d = ''
for(let i = 1; i <= 1000000; i++) d += i

let result = 1
for(let i = 1; i <= 100; i *= 10) result *= d[i-1]

console.log(result)