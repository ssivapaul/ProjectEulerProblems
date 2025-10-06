

let n = 29
let sqN = Math.sqrt(n)
let f = Math.floor(sqN)
let den = sqN - f
let b = 1, c = f, d = 1, an = 1
let a0 = f
let An = [a0]
let count = 10
while (true) {
    d = (n - c**2)/b
    an = Math.floor((f + c)/d)
    An.push(an)
    c = an*d - c
    b = d
    if(b == 1 && c == f) break
}
console.log(An)

