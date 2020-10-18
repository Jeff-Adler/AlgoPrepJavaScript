
//returns value of some digit of a number
const getDigit = (num,place) => {
    // const power = 10 ** place

    //Abs prevents negative numbers from interfering
    //Math.floor just gets rid of any decimals
    // const numByPower = Math.floor(Math.abs(num) / power)
    
    // return numByPower % 10

    return (Math.floor(Math.abs(num) / (10 ** place))) % 10
}
// console.log("Should return 5: ", getDigit(12345,0))
// console.log("Should return 4: ", getDigit(12345,1))
// console.log("Should return 3: ", getDigit(12345,2))
// console.log("Should return 2: ", getDigit(12345,3))
// console.log("Should return 1: ", getDigit(12345,4))
// console.log("Should return 0: ", getDigit(12345,5))

//counts number of digits
const digitCount = (num, counter = 0) => {
    if (Math.abs(num) < 1) return counter
    return digitCount(num/10,++counter)
}

const digitCountNonRecursive = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log("Should return 1: ", digitCount(1))
console.log("Should return 2: ", digitCount(43))
console.log("Should return 3: ", digitCount(847))
console.log("Should return 4: ", digitCount(5847))
console.log("Should return 4: ", digitCount(-5847))
console.log("Should return 2: ", digitCount(10))
console.log("Should return 3: ", digitCount(100))
console.log("Should return 3: ", digitCount(-100))


// console.log("Should return 1: ", digitCountNonRecursive(1))
// console.log("Should return 2: ", digitCountNonRecursive(43))
// console.log("Should return 3: ", digitCountNonRecursive(847))
// console.log("Should return 4: ", digitCountNonRecursive(5847))