//sameFrequency: Given two positive integers, find out if the two
//numbers have the same frequency of digits

//Understand the Problem
    //Given two integers, the same numbers should appear in the same frequency across the digits.


//Explore Concrete Examples
    //Since its integers, we don't have to worry about decimals

//Break It Down
    //store each digit as a key, store its occurrence as a value


//Solve/Simplify


//Look back and Refactor

const sameFrequency = (num1, num2) => {
    if (num1.length !== num2.length) {
        return false
    }
    str1 = num1.toString()
    str2 = num2.toString()
    frequencyCounter1 = {}
    frequencyCounter2 = {}
    for (const digit of str1 ) {
        frequencyCounter1[digit] ? ++frequencyCounter1[digit] : frequencyCounter1[digit] = 1
    }
    for (const digit of str2 ) {
        frequencyCounter2[digit] ? ++frequencyCounter2[digit] : frequencyCounter2[digit] = 1
    }
    for (const key in frequencyCounter1) {
        if (!frequencyCounter2.hasOwnProperty(key)){
            return false
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    } 
    return true
}


num1 = 123456789
num2 = 987654321
num3 = 122456789
num4 = 12345678
num5 = 1234567892
num6 = 11223334
num7 = 12312343

console.log("Should be true: ", sameFrequency(num1,num2))
console.log("Should be false: ", sameFrequency(num1,num3))
console.log("Should be false: ", sameFrequency(num1,num4))
console.log("Should be false: ", sameFrequency(num1,num5))
console.log("Should be true: ", sameFrequency(num6,num7))