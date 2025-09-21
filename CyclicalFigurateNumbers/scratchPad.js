let cyclicalGenerateNums = (m) => {
    let result = []
    let sum = 0
    let seen = new Set()
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

 // ---------- Normalize cycle (for uniqueness) ----------
    let normalizeCycle = (values) => {
        let minIdx = values.indexOf(Math.min(...values))
        let rotated = values.slice(minIdx).concat(values.slice(0, minIdx))
        return rotated.join(",")
    }

let  dfsIterative = (start, sets) => {
    let stack = [{ path: start, remaining: sets }]
    while (stack.length > 0) {
        let state = stack.pop()
        let { path, remaining } = state
        if (remaining.length === 0) {
            let first = path[0], last = path[path.length - 1]
            if (last.suffix === first.prefix) {
                let values = path.map(p => p.value)
                let key = normalizeCycle(values) // Normalise to filter duplicate cycle
                if (!seen.has(key)) {
                    seen.add(key)
                    let sm = values.reduce((a, b) => a + b, 0)
                    sum += sm
                }
            }
            //continue
        }
        let last = path[path.length - 1]
        for (let i = 0; i < remaining.length; i++) {
            let nextSet = remaining[i]
            for (let num of nextSet) {
                if (last.suffix === num.prefix) {
                    if (path.some(p => p.value === num.value)) continue
                    let newRemaining = remaining.slice(0, i).concat(remaining.slice(i+1))
                    let newPath = [...path, num]
                    stack.push({ path: newPath, remaining: newRemaining })
                }
            }
        }
    }
}

// ---------- Start search ----------

let set = [SQR, PEN, HEX, HEP, OCT];  // all except TRI (arbitrary choice)
let sets = set.slice(0, m-1)
for (let tri of TRI) {
    dfsIterative([tri], sets)
}
return sum
}

// ---------- Run ----------
console.time("Cycl")
//console.log(cyclicalGenerateNums(3))
console.log(cyclicalGenerateNums(4))
//console.log( cyclicalGenerateNums(5))
//console.log(cyclicalGenerateNums(6))
console.timeEnd("Cycl")

