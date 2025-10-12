

let triangle = [[3, 0, 0, 0],[7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]]

const rows = 4;
const cols = 4;
const memo = Array(rows).fill().map(() => Array(cols).fill(0));
console.log(memo)

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        memo[i][j] = triangle[i][j] + max(memo[i+1][j], memo[i+1][j+1])
    }
}
