
function largeNonMersennePrime(multiplier, power) {
    let base = 2
    let mod = 10**10
    let result = multiplier
    base = base % mod
    while (power > 0) {
        if (power & 1) result = (result * base) % mod // power & 1 => power % 2 === 1
        power = power >> 1 // power = power // 2 
        base = (base * base) % mod
    }
    result += 1
    result = result.toString().padStart(10, '0');
    return result
}

largeNonMersennePrime(19, 6833086);