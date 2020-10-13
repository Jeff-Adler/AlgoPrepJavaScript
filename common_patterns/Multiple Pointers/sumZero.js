//Write function which accepts sorted array of integers
//The function should find the first pair where sum is ) (e.g. -3,3)
//Return array that includes both values that sum to zero, or undefined if pair does not exist

//Naive O(n^2) solution: loop through array, for every value in array, loop through
//in body of nested loop, return where arr[j] === arr[i]

//O(n) solution
const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1
    while (arr[left] + arr[right] !== 0) {
        if (arr[left] + arr[right] < 0) {
            ++left
        } else if (arr[left] + arr[right] > 0) {
            --right
        }
        if (!(left < right)) {
            return undefined
        }
    }
    return [arr[left],arr[right]]
}

const arr1 = [-3,-1,0,1,2,3,4,5]
const arr2 = [-3,-1,0,1,2,4,5]
const arr3 = [-3,-1,0,2,4,5]

console.log("Should return [-3,3]: ", sumZero(arr1))
console.log("Should return [-1,1]: ", sumZero(arr2))
console.log("Should return undefined: ", sumZero(arr3))