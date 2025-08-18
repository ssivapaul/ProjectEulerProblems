

let cnt = 0
let m = 1
let n = 100000
let combination = 1
while (combination < n) {
    combination *= (m - cnt) // (n - r)
    combination /= (cnt + 1) // (r + 1)
    cnt++
}

console.log(combination, cnt)