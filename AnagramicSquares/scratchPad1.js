
console.time("Anagramic")
let a = []
let p = 0
for(let i = 10**3; true; i++) {
    p = Math.sqrt(i)
    if(p == Math.floor(p)) {
        a.push(p**2)
        break
    }
}

for(let c = p + 1; c**2 < 10**4; c++) a.push(c**2)
console.log(a)
console.timeEnd("Anagramic")
/*
Waiting:1. anagramicSquares(['CARE', 'RACE']) should return a number.
Waiting:2. anagramicSquares(['CARE', 'RACE']) should return 9216.
Waiting:3. anagramicSquares(testWords1) should return 4761.
Waiting:4. anagramicSquares(testWords2) should return 18769.


Problem 98: Anagramic squares
By replacing each of the letters in the word CARE with 1, 2, 9, and 6 respectively, we form a square number:  1296=362
 . What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number:  9216=962
 . We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.

Using the words array, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).

What is the largest square number formed by any member of such a pair?

Note: All anagrams formed must be contained in the given words array.

function anagramicSquares(words) {

  return true;
}

// Only change code above this line
const testWords1 = [
"DAMAGE","DANGER","DANGEROUS","DARK","DATA","DATE","DAUGHTER","DAY","DEAD","DEAL","DEATH","DEBATE","DEBT","DECADE","DECIDE","DECISION","DECLARE","DEEP","DEFENCE","DEFENDANT","DEFINE","DEFINITION","DEGREE","DELIVER","DEMAND","DEMOCRATIC","DEMONSTRATE","DENY","DEPARTMENT","DEPEND","DEPUTY","DERIVE","DESCRIBE","DESCRIPTION","DESIGN","DESIRE","DESK","DESPITE","DESTROY","DETAIL","DETAILED","DETERMINE","DEVELOP","DEVELOPMENT","DEVICE","DIE","DIFFERENCE","DIFFERENT","DIFFICULT","DIFFICULTY","DINNER","DIRECT","DIRECTION","DIRECTLY","DIRECTOR","DISAPPEAR","DISCIPLINE","DISCOVER","DISCUSS","DISCUSSION","DISEASE","DISPLAY","DISTANCE","DISTINCTION","DISTRIBUTION","DISTRICT","DIVIDE","DIVISION","DO","DOCTOR","DOCUMENT","DOG","DOMESTIC","DOOR","DOUBLE","DOUBT","DOWN","DRAW","DRAWING","DREAM","DRESS","DRINK","DRIVE","DRIVER","DROP","DRUG","DRY","DUE","DURING","DUTY","LABOUR","LACK","LADY","LAND","LANGUAGE","LARGE","LARGELY","LAST","LATE","LATER","LATTER","LAUGH","LAUNCH","LAW","LAWYER","LAY","LEAD","LEADER","LEADERSHIP","LEADING","LEAF","LEAGUE","LEAN","LEARN","LEAST","LEAVE","LEFT","LEG","LEGAL","LEGISLATION","LENGTH","LESS","LET","LETTER","LEVEL","LIABILITY","LIBERAL","LIBRARY","LIE","LIFE","LIFT","LIGHT","LIKE","LIKELY","LIMIT","LIMITED","LINE","LINK","LIP","LIST","LISTEN","LITERATURE","LITTLE","LIVE","LIVING","LOAN","LOCAL","LOCATION","LONG","LOOK","LORD","LOSE","LOSS","LOT","LOVE","LOVELY","LOW","LUNCH"
];

anagramicSquares(testWords1);


For each square with matching length:

Try build letter→digit mapping

Reject if conflict

Convert second word

Check if it is a square

Track maximum
*/