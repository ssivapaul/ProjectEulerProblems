
let cyclicalGenerateNums = (m) => {
    let result = []
    let sum = 0
// ---------- Generate figurate sets ----------
let generateFigurates = (formula, type) => {
    let arr = []
    let n = 1, num = 0
    while (num < 10000) {
        num = formula(n)
        if (num >= 1000 && num < 10000) {
            let s = String(num)
            if (s[2] !== '0') { // avoid "xx0y"
                arr.push({
                    value: num,
                    prefix: Number(s.slice(0, 2)),
                    suffix: Number(s.slice(2)),
                    type
                })
            }
        }
        n++
    }
    return arr
}

let TRI = generateFigurates(n => n*(n+1)/2, "TRI")
let SQR = generateFigurates(n => n*n, "SQR")
let PEN = generateFigurates(n => n*(3*n-1)/2, "PEN")
let HEX = generateFigurates(n => n*(2*n-1), "HEX")
let HEP = generateFigurates(n => n*(5*n-3)/2, "HEP")
let OCT = generateFigurates(n => n*(3*n-2), "OCT")

// ---------- Recursive DFS ----------
let dfs = (path, remainingSets) => {
    // Base case: all sets used
    if (remainingSets.length === 0) {
        let first = path[0], last = path[path.length - 1]
        if (last.suffix === first.prefix) {
            console.log(path)
            values = path.map(p => p.value)
            let sm = values.reduce((a, b) => a + b, 0)
            result.push({values: values, sum: sm})
            sum += sm
            console.log("CYCLE FOUND:", values, "SUM =", sm)
            console.log("\n----------------------------------------------------")
        }
        return null
    }
    let last = path[path.length - 1]
    for (let i = 0; i < remainingSets.length; i++) {
        let nextSet = remainingSets[i]
        for (let num of nextSet) {
            if (last.suffix === num.prefix) {
                let newRemaining = remainingSets.slice(0, i).concat(remainingSets.slice(i+1))
                dfs([...path, num], newRemaining)
            }
        }
    }
    return null
}
// ---------- Start search ----------

let set = [SQR, PEN, HEX, HEP, OCT];  // all except TRI (arbitrary choice)
let sets = set.slice(0, m-1)
for (let tri of TRI) {
    dfs([tri], sets)
}
console.log("====================================================")
return sum
}

console.time("Cycl")
console.log(cyclicalGenerateNums(3))
console.log(cyclicalGenerateNums(4))
console.log(cyclicalGenerateNums(5))
console.log(cyclicalGenerateNums(6))
console.timeEnd("Cycl")