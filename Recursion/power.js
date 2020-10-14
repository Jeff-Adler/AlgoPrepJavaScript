// Power: accepts a base and an exponent and returns the power of the base to the exponent. In other words,
// it recursively mimics Math.pow(). Ignore negative bases and exponents

const power = (base,exponent) => {
    if (exponent === 0) return 1
    return base * power(base, exponent - 1)
}

console.log("Should return 1: ", power(2,0))
console.log("Should return 4: ", power(2,2))
console.log("Should return 16: ", power(2,4))