const getDigit = (num,place) => {
    const power = 10 ** place

    const numByPower = Math.floor(Math.abs(num) / power)
    
    return numByPower % 10
}

console.log("Should return 5: ", getDigit(12345,0))
console.log("Should return 4: ", getDigit(12345,1))
console.log("Should return 3: ", getDigit(12345,2))
console.log("Should return 2: ", getDigit(12345,3))
console.log("Should return 1: ", getDigit(12345,4))
console.log("Should return 0: ", getDigit(12345,5))