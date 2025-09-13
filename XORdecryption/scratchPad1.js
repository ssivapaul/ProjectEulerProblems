

let s = "ABC", j = JSON.stringify
let a = [...s].map(s => s.charCodeAt())  // string to array ( [...s] is short for s.slice() )
let r = String.fromCharCode(...a)     // array to string ( (...a) is short for .apply(0, a) )
console.log(j(s), j(a), j(r))
console.log(a)


//let a = 65
//let b = 90
/*
console.log(a.toString(2))
console.log(b.toString(2))
console.log(String.fromCharCode(66, 69))
console.log((a^b).toString(2))
*/
var asciiKeys = [70, 69, 69, 69, 32, 67, 66, 68, 69, 32, 67, 65, 77, 67];
//let a = ['a', 'b', 't']

//console.log(a.map(b => b.charCodeAt()))
//console.log(a.map(b => b.charCodeAt()))
