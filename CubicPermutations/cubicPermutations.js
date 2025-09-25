
let cubicPermutations = (n) => {
    let c = 1
    let obP = {}
    while(true) {
        let cube = c**3
        let sCU = String(cube)
        let sorCU = sCU.split('').sort().join('')
        obP[sorCU] = obP[sorCU] ? [...obP[sorCU], cube] : [cube]
        if(obP[sorCU].length === n) return obP[sorCU][0]
        c++
    }
}

console.time("Cube")
console.log(cubicPermutations(2)); // 125
console.log(cubicPermutations(3)); // 41063625
console.log(cubicPermutations(4)); // 1006012008
console.log(cubicPermutations(5)); // 127035954683
console.timeEnd("Cube")


