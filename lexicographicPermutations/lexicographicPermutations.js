function lexicographicPermutations(n) {
    let results = 1
    for(let i = 1; i < 11; i++) {
        results *= i
    }

  return results;
}

//console.log(lexicographicPermutations(999999));

function gP(n) {
    const result = [];
    function permute(cP, rE) {
        if (rE.length === 0) {
            return result.push(Number(cP));
        }
        for (let i = 0; i < rE.length; i++) {
            permute(cP + rE[i], rE.slice(0, i) + rE.slice(i + 1));
        }
    }
    permute('', "0123456789");
    return result.sort((a, b) => a-b)[n];
}

console.log(gP(999999));
//---------------------------------------
