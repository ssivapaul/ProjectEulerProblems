let  nxng = (n, init = 0) => {
    let  g = [];
    for (let i = 0; i < n; i++) {
        g[i] = []
        for(let j = 0; j < n; j++) {
            g[i][j] = init
        }
    }
    return g;
}
//--------------------------
let n = 505
let c = (n-1)/2
let x = y = c
let sCnt = 0
let g = nxng(n)

let cntr = 1
g[x][y] = cntr

while(sCnt < n-1) {
    sCnt++
    for(let i = 1; i <= sCnt; i++) g[x][++y] =  ++cntr //Top row to continue spiral
    for(let i = 1; i <= sCnt; i++) g[++x][y] = ++cntr // Right column
 
    sCnt++
    for(let i = 1; i <= sCnt; i++) g[x][--y] = ++cntr // Bottom row
    for(let i = 1; i <= sCnt; i++) g[--x][y] = ++cntr // Left column    
}
for(let i = 1; i <= sCnt; i++) g[x][++y] = ++cntr // Top row to complete spiral

let sum = 0
for(let i = 0; i < n; i++) sum += g[i][i] + g[i][n - 1 - i]
sum -= g[c][c]

console.log("Diagonal sum: ", sum)
