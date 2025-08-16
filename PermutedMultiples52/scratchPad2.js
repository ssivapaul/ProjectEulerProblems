function permutedMultiples(n) {
   let sortD = (a) => String(a).split('').sort().join('')

    let i = 1
    while (true) {
        let d = sortD(i);
        let complete = true
        for(let j = 2; j <= n; j++) {
            if(sortD(j*i) !== d) {
                complete = false
                break
            }
        }
        if(complete) return i
        i++
    }
}

//console.log(permutedMultiples(2)); // 125874
console.time("PermuterdMultiples")
console.log(permutedMultiples(6)); // 142857
console.timeEnd("PermuterdMultiples")