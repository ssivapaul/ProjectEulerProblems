
//b = 'abcdefghik'
//for(let num of ['1','2','3','4','5','6','7','8','9']) {
//for(let num of '123456789') {
//    for(let j = 1; j < b.length - 1; j++) {
//        console.log(b.slice(0, j) + num + b.slice(j+1))
// }
//}

let a = 8
let b = 12
if (a > 7 && ++b < 14) {
    console.log(true, b)
} else console.log(false, b)
/*
print(a[:2])
print(a[3:])
*/


import fs from 'fs';
import readline from 'readline';

let bs = []
try {
    const rl = readline.createInterface({
        input: fs.createReadStream('./SuDoku/Grid.txt'),
        //crlfDelay: Infinity // Treats \r\n as a single newline
    });
    let i = 0
    let b = []
    rl.on( 'line' , line => {
        i++
        if(line[0] !== "G") b.push(line) 
        if(i%10 == 0) {
            bs.push(b)
            b = []
        }
    });

    await new Promise(resolve => rl.once('close', resolve));
    console.log('Finished reading the file.');
  } catch (err) {
    console.error(err);
  }


let b = bs[0]
console.log(b)
let v1 = []
for(let i = 0; i < 9; i++) {
    if(b[0][i] == '0') {
        console.log(b[0][i])
        let v2 = []
        let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        for(let j = 0; j < 9; j++) {
            if(b[j][i] !== '0') {
                let index = num.indexOf(b[j][i])
                num.splice(index, 1)
            }
        }
        v1.push(num)
    }
}
console.log(v1)

/*
const lineReader = require('line-reader');
const filePath = 'path/to/your/file.txt';
lineReader.eachLine(filePath, (line, last, done) => {
    console.log(`Line: ${line}`);
    if (last) {
        console.log('Finished reading the file.');
        done();
    }
});

def iter_problems() -> Iterator[list[list[int]]]:
    with open("data/p096_sudoku.txt") as f:
        rows = []
        for line in f:
            if line.startswith("Grid"):
                rows = []
            else:
                rows.append([int(d) for d in line.strip()])
            if len(rows) == 9:
                yield rows
*/