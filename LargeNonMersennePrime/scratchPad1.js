
let base = 2
//let exp = 7830457
let exp = 20
let mod = 10**10
let modExp = (base, exp, mod) => {
    result = 1
    base = base % mod
    while (exp > 0) {
        if (exp % 2 == 1) result = (result * base) % mod
        exp = exp >> 1
        base = (base * base) % mod
        console.log(result, exp, base)
    }
    return result
}

console.time("LargeNon")
console.log(modExp(base, exp, mod))
console.timeEnd("LargeNon")

/*
Key Insight: Modular Arithmetic
We only need the last 10 digits, which is equivalent to finding the result modulo $10^{10}$.

Using modular arithmetic properties:

$(a \times b) \bmod m = ((a \bmod m) \times (b \bmod m)) \bmod m$
We can compute $2^{7830457} \bmod 10^{10}$ using modular exponentiation
Modular Exponentiation (Fast Power Algorithm)
Instead of computing $2^{7830457}$ directly, we use binary exponentiation:

def mod_exp(base, exp, mod):
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp = exp >> 1
        base = (base * base) % mod
    return result

-----------------------------------------------------
def solution_naive() -> int:
    return (28433 * 2**7830457 + 1) % 10**10
If we wouldn't have these, we could use a modulus operation after each multiplication. We are only interested in the lower 10 digits, so we don't need to track the higher digits at all.

def solution_modulus() -> int:
    divisor = 10**10
    number = 28433
    for i in range(7830457):
        number *= 2
        number %= divisor
    number += 1
    number %= divisor
    return number

    */