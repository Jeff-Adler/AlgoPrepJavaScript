// - Function accepts a sorted array and a value.
// - Create left pointer at the start of the array, and a right pointer at the end
// - While the left pointer comes before right pointer
//   - Create pointer in the middle
//   - if you find value you want, return index
//   - if value is too small, move left pointer up
//   - if value is too large, move right pointer down
// - If you never find value, return -1

const binarySearchRecursive = (arr, val, left = 0, right = arr.length - 1) => {

    if (left >= right) return -1
    
    let middle = Math.round((right + left) / 2)

    if (arr[middle] === val) {
        return middle
    } else if (arr[middle] > val) {
        //ideal solution would not include this
        if (left === 0 && right === 1) {
            if (arr[0] === val) {
                return 0
            } else {
                middle = 0
            }
        }
        return binarySearchRecursive(arr,val,left,middle - 1)
    } else if (arr[middle] < val) {
        return binarySearchRecursive(arr,val,middle + 1,right)
    }
    
}

console.log("Should return 1: ", binarySearchRecursive([1,2,3,4,5],2))
console.log("Should return 2: ", binarySearchRecursive([1,2,3,4,5],3))
console.log("Should return 4: ", binarySearchRecursive([1,2,3,4,5],5))
console.log("Should return -1: ", binarySearchRecursive([1,2,3,4,5],6))
console.log("Should return -1: ", binarySearchRecursive([1,2,3,4,5],0))
console.log("Should return 0: ", binarySearchRecursive([1,2,3,4,5],1))
console.log("Should return -1: ", binarySearchRecursive([1,2,4,5,6],3))
console.log("Should return -1: ", binarySearchRecursive([1,2,4,5,],3))
console.log("Should return 2: ", binarySearchRecursive([1,2,4,5,],4))

function binarySearch(arr,elem) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    while(arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === elem ? middle : -1
}