
// rotate string
let str = 'Hello'
let n = str.length
while ( n > 0) {
    let s = str.slice(-n) + str.slice(0, -n)
    console.log(s)
    --n
}
