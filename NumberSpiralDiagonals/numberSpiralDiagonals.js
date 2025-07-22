let spiralDiagonals = (n) => {
    if(n%2 == 0) return 0

    let sum = 1
    for(let i = 3; i <= n; i += 2) {
        sum += 4*i*i - 6*(i - 1)
    }
    return sum
}
console.log(spiralDiagonals(5))      // 101
console.log(spiralDiagonals(101))    // 692101
console.log(spiralDiagonals(303))    // 18591725
console.log(spiralDiagonals(505))    // 85986601
console.log(spiralDiagonals(1001))   // 669171001