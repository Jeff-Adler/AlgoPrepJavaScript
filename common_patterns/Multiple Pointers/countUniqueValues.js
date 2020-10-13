//countUniqueValues: accepts a sorted array, and counts the unique values in the array.

//attempted solution: 
    //start Value pointer at index 0, Comparison pointer at index 1
const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    let value = 0
    let comparison = 1
    //assumes the array has at least one value
    let uniqueCount = 1
    while (comparison < arr.length) {
        if (arr[value] !== arr[comparison]) {
            uniqueCount++
        }
        ++value
        ++comparison
    }
    return uniqueCount
} 

const arr1 = [0,1,2,2,3,3,3,4]
const arr2 = [0,0,0,0]
const arr3 = [0,2,4,9,20,20,47]
const arr4 = []

console.log("Should return 5: ", countUniqueValues(arr1))
console.log("Should return 1: ", countUniqueValues(arr2))
console.log("Should return 6: ", countUniqueValues(arr3))
console.log("Should return 0: ", countUniqueValues(arr4))