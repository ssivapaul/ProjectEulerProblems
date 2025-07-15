function namesScores(arr) {
    let v = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26 };
    arr.sort();
    let sum = 0
    for(let[i, a] of arr.entries()) {
        let b = a.toLowerCase();
        let s = 0
        for(let i = 0; i < b.length; i++) {
            s += v[b[i]]
        }
        sum += s*(i+1)  
    }
  return sum;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));