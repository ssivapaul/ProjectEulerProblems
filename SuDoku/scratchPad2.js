import fs from 'fs';
import readline from 'readline';
/*-----------------------------------------
//read and populate data in bs
let bs = []
try {
    const rl = readline.createInterface({
        input: fs.createReadStream('./SuDoku/Grid.txt'),
        //crlfDelay: Infinity // Treats \r\n as a single newline
    });
    let i = 0
    let b = ''
    rl.on( 'line' , line => {
        i++
        if(line[0] !== "G") b += line 
        if(i%10 == 0) {
            bs.push(b)
            b = ''
        }
    });
    await new Promise(resolve => rl.once('close', resolve));
    console.log('Finished reading the file.');
  } catch (err) {
    console.error(err);
  }
*/

//Slice data
let testPuzzles1 = [
  '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
  '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
  '000000907000420180000705026100904000050000040000507009920108000034059000507000000'
];

let suDoku = (puzzlesArr) => {
    let result = 0 
    let slvSudo = (b) => {
        let sRow = (a, b) => Math.floor(a/9) == Math.floor(b/9) // True if a & b are in same Row
        let sCol = (a, b) => (a - b)%9 == 0 // True if a & b are in same Col
        // True if a & b are in same 3 X 3 block
        let sBlo = (a, b) => Math.floor(a/27) == Math.floor(b/27) && (Math.floor((a%9)/3) == Math.floor((b%9)/3))
        let indexOfBlank = b.indexOf('0') // Get first blank index
        // If all blanks filled
        if(indexOfBlank === -1) {
            result += Number(b.slice(0, 3)) // slice top 3 digits
            return true // succesfully filled all blanks
        }
        
        let numExcluded = [] // Numbers those to be excluded at the indexOfBlank
        for(let i = 0; i < 81; i++) {
            if(sRow(indexOfBlank, i) == true || sCol(indexOfBlank, i) == true || sBlo(indexOfBlank, i) == true) {
                numExcluded.push(b[i])
            }
        }
    
        for(let filNum of '123456789') { // Pick a number to be filled & fill if it is NOT in excluded num list.
            if(!numExcluded.includes(filNum ) && slvSudo(b.slice(0, indexOfBlank) + filNum + b.slice(indexOfBlank + 1))) {
                return true
            }
        }
        return false
    }

    for(let board of puzzlesArr) slvSudo(board)
    return result
}

console.time('SuDoku')
console.log(suDoku(testPuzzles1))
console.timeEnd('SuDoku')

/*
same_row = lambda i,j: i // 9 == j // 9
same_col = lambda i,j: (i - j) % 9 == 0
same_block = lambda i,j: i//27 == j//27 and i%9//3 == j%9//3
def solve_sudoku(board):
    try:
        empty = board.index('0')
    except ValueError:
        print('\n'.join(board[i:i+9] for i in range(0, 81, 9)))
        return True
    excluded = {board[j] for j in range(81) if same_row(empty, j) or same_col(empty, j) or same_block(empty, j)}
    for num in '123456789':
        if num not in excluded and solve_sudoku(board[:empty] + num + board[empty+1:]):
            return True
    return False

board = ''.join(input() for _ in range(9))
solve_sudoku(board)	

*/