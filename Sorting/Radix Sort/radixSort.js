
//counts number of digits
const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

//given an array of numbers, returns the number of digits in the largest numbers in the list
const mostDigits = (nums) => {
    let maxDigits = 0
    for (const number of nums) {
        maxDigits = Math.max(digitCount(number),maxDigits)
    }
    return maxDigits
}

//returns value of some digit of a number
const getDigit = (num,place) => {
    return (Math.floor(Math.abs(num) / (10 ** place))) % 10
}

const radixSort = (nums) => {

    for (let k = 0 ; k <= mostDigits(nums) ; k++) {
        // let buckets = [[],[],[],[],[],[],[],[],[],[]]
        let buckets = Array.from({length:10},()=>[])
        for (const element of nums) {
            if (getDigit(element,k)) {
                buckets[getDigit(element,k)].push(element)
            } else {
                buckets[0].push(element)
            }
        }
        nums = [].concat(...buckets)
        // nums = []
        // for (const element of buckets) {
        //     nums = nums.concat(element)
        // }
    }
    return nums
}

console.log(radixSort([657,5,1,97,1035,42]))
console.log(radixSort([34645,657,5,1,234,9583,1,234,97,1035,42]))


// console.log("Should return 5: ", getDigit(12345,0))
// console.log("Should return 4: ", getDigit(12345,1))
// console.log("Should return 3: ", getDigit(12345,2))
// console.log("Should return 2: ", getDigit(12345,3))
// console.log("Should return 1: ", getDigit(12345,4))
// console.log("Should return 0: ", getDigit(12345,5))


const digitCountRecursive = (num, counter = 0) => {
    if (Math.abs(num) < 1) return counter
    return digitCount(num/10,++counter)
}

// console.log("Should return 1: ", digitCount(1))
// console.log("Should return 2: ", digitCount(43))
// console.log("Should return 3: ", digitCount(847))
// console.log("Should return 4: ", digitCount(5847))
// console.log("Should return 4: ", digitCount(-5847))
// console.log("Should return 2: ", digitCount(10))
// console.log("Should return 3: ", digitCount(100))
// console.log("Should return 3: ", digitCount(-100))


// console.log("Should return 1: ", digitCountNonRecursive(1))
// console.log("Should return 2: ", digitCountNonRecursive(43))
// console.log("Should return 3: ", digitCountNonRecursive(847))
// console.log("Should return 4: ", digitCountNonRecursive(5847))


const mostDigitsRecursive = (nums,maxDigits = 0) => {
    if (nums.length === 0) return maxDigits
    if (digitCount(nums[0]) > maxDigits) maxDigits = digitCount(nums[0])
    return mostDigits(nums.splice(1),maxDigits)
}

// console.log("Should return 4: ", mostDigits([1234,56,7]))
// console.log("Should return 5: ", mostDigits([1,1,11111,1]))
// console.log("Should return 2: ", mostDigits([12,34,56,78]))
// console.log("Should return 10: ", mostDigits([12,34,56,7474747474,78]))