

function distinctPowers(n) {
    let powers = []
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j <= n; j++) {
            let p = Math.pow(i, j)
            if(!powers.includes(p)) powers.push(p)
        }
    }
    //powers.sort((a, b) => a-b)
    return powers.length;
}

console.log(distinctPowers(15));
console.log(distinctPowers(20));
console.log(distinctPowers(25));
console.log(distinctPowers(30));
