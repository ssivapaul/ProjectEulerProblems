function digitFibonacci(n) {
    let cache = {}
    let fib = (i) => {
        if (i == 1 || i == 2) return 1
        if (cache[i] !== undefined) return cache[i]

        cache[i] = fib(i-1) + fib(i-2)
        return cache[i]
    }

    for( let j = 1; j < 94; j++) {
        if( fib(j).toString().length === n) return j
    }
}

console.log(digitFibonacci(20));