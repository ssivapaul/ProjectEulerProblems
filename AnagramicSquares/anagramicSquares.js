
let anagramicSquares = (words) => {
    let maxPsQ = 0 // To store maxPerfect square
    let sT = {} // Object for storing all words including Anaram groups, pairs.
    for( let t of words) {
        let sTest = t.split('').sort().join('');
        if(sT[sTest] !== undefined) sT[sTest].push(t)
            else sT[sTest] = [t]
    }

    let sTest = {} // Object for storing only Anagram groups
    sTest = Object.fromEntries(Object.entries(sT).filter(([_, val]) => val.length > 1 ))
    //----------------------------------------------------------------
    for (let [key, value] of Object.entries(sTest)) {
        let aT = {} // Object for saving Anagramic, pairs
        for(let k of key) {
            if(aT[k] !== undefined) aT[k]++
            else aT[k] = 1
        }

        let sAt = Object.values(aT).sort()
        //---------------------------------------------------------------
        let ana = [] // Array to store all perfect squaters
        let p = 0
        let n = sAt.length - 1
        for(let i = 10**n; true; i++) {
            p = Math.sqrt(i)
            if(p == Math.floor(p)) {
                ana.push(String(p**2))
                break
            }
        }
        for(let c = p + 1; c**2 < 10**(n+1); c++) ana.push(String(c**2))
        //----------------------------------------------------------------
        let anag = [] // array to store mapped perfect square 
        for(let an of ana) {
            let ang = {}
            for(let a of an) {
                if(ang[a] !== undefined) ang[a]++
                else ang[a] = 1
            }
            if(Object.values(ang).length == n + 1) {
                let sAng = Object.entries(ang).sort((a, b) => a[1] - b[1])
                for(let i = 0; i < sAng.length; i++) {
                    if(sAng[i][1] !== sAt[i]) break                    
                    if(i == sAng.length - 1) anag.push(an)
                }
            }
        }
   
        for(let j = 0; j < anag.length ; j++) {
            let mapS = ''
            for(let i = 0; i < n+1; i++) {
                let map = value[1].indexOf(value[0][i])
                mapS += anag[j][map]
            }
            if(anag.includes(mapS)) {
                let max = Math.max(mapS, anag[j])
                if(max > maxPsQ) maxPsQ = max
            }
        }
    }
    return maxPsQ
}

let testWords1 = [
"DAMAGE","DANGER","DANGEROUS","DARK","DATA","DATE","DAUGHTER","DAY","DEAD","DEAL","DEATH","DEBATE","DEBT","DECADE","DECIDE","DECISION","DECLARE","DEEP","DEFENCE","DEFENDANT","DEFINE","DEFINITION","DEGREE","DELIVER","DEMAND","DEMOCRATIC","DEMONSTRATE","DENY","DEPARTMENT","DEPEND","DEPUTY","DERIVE","DESCRIBE","DESCRIPTION","DESIGN","DESIRE","DESK","DESPITE","DESTROY","DETAIL","DETAILED","DETERMINE","DEVELOP","DEVELOPMENT","DEVICE","DIE","DIFFERENCE","DIFFERENT","DIFFICULT","DIFFICULTY","DINNER","DIRECT","DIRECTION","DIRECTLY","DIRECTOR","DISAPPEAR","DISCIPLINE","DISCOVER","DISCUSS","DISCUSSION","DISEASE","DISPLAY","DISTANCE","DISTINCTION","DISTRIBUTION","DISTRICT","DIVIDE","DIVISION","DO","DOCTOR","DOCUMENT","DOG","DOMESTIC","DOOR","DOUBLE","DOUBT","DOWN","DRAW","DRAWING","DREAM","DRESS","DRINK","DRIVE","DRIVER","DROP","DRUG","DRY","DUE","DURING","DUTY","LABOUR","LACK","LADY","LAND","LANGUAGE","LARGE","LARGELY","LAST","LATE","LATER","LATTER","LAUGH","LAUNCH","LAW","LAWYER","LAY","LEAD","LEADER","LEADERSHIP","LEADING","LEAF","LEAGUE","LEAN","LEARN","LEAST","LEAVE","LEFT","LEG","LEGAL","LEGISLATION","LENGTH","LESS","LET","LETTER","LEVEL","LIABILITY","LIBERAL","LIBRARY","LIE","LIFE","LIFT","LIGHT","LIKE","LIKELY","LIMIT","LIMITED","LINE","LINK","LIP","LIST","LISTEN","LITERATURE","LITTLE","LIVE","LIVING","LOAN","LOCAL","LOCATION","LONG","LOOK","LORD","LOSE","LOSS","LOT","LOVE","LOVELY","LOW","LUNCH"
];

console.log(anagramicSquares(testWords1))