
let permutedMultiples = (n) => {
    let sortD = (a) => String(a).split('').sort().join('')

    let i = 11
    while (true) {
        count = 1
        let d = sortD(i)
        for(let j = 2; j <= n; j++) {
            let mul = j*i
            if(sortD(mul) === d) count++
        }
        if(count == n) return i
        i++
    }
}
console.time("PermuterdMultiples")
console.log(console.log(permutedMultiples(6)))
console.timeEnd("PermuterdMultiples")


