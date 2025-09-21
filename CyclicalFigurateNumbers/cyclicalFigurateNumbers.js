
function cyclicalFigurateNums(n) {
    let sum = 0
    let seen = new Set()
  let generateFigurates = (formula, type) => {
    let arr = []
    let m = 1, num = 0
    while (num < 10000) {
        num = formula(m)
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
        m++
    }
    return arr
  }

  let TRI = generateFigurates(m => m*(m+1)/2, "TRI")
  let SQR = generateFigurates(m => m*m, "SQR")
  let PEN = generateFigurates(m => m*(3*m-1)/2, "PEN")
  let HEX = generateFigurates(m => m*(2*m-1), "HEX")
  let HEP = generateFigurates(m => m*(5*m-3)/2, "HEP")
  let OCT = generateFigurates(m => m*(3*m-2), "OCT")

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
  let sets = set.slice(0, n-1)
  for (let tri of TRI) {
    dfsIterative([tri], sets)
  }
  return sum
}

console.time("Cycl")
console.log(cyclicalFigurateNums(3));
console.log(cyclicalFigurateNums(4));
console.log(cyclicalFigurateNums(5));
console.log(cyclicalFigurateNums(6));
console.timeEnd("Cycl")