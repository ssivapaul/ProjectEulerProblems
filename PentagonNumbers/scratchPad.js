
let isPent = (n) => {
    return (1 + Math.sqrt(1 + 24*n))/6 % 1 === 0
}

for(let k = 2; true; k++) {
    let exit = false
    for (let j = 1; j < k; j++) {
        let S = k*(3*k - 1)/2 + j*(3*j - 1)/2
        let D = k*(3*k - 1)/2 - j*(3*j - 1)/2   
        if(isPent(S) && isPent(D)) {
            console.log(D, S, j, k)
            exit = true
            break
        }     
    }
    if(exit) break
}

/*
Pn=n(3n−1)/2
for(let i = 0; i < Pn.length; i++) {
    let S = Pn[i+1] + Pn[i]
    let D = Pn[i+1] - Pn[i]
    if(Pn.includes(S) && Pn.includes(D)) console.log("TrueSD", Pn[i], S)
}
*/