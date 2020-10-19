/**
 * @param {number} n
 * @return {number}
 */

//Problem: Given an array of length n, where arr[i] = (2* i) = 1, find the number of operations you need to get every value in the array to be equal.
//Operation: pick two elements in the array, and add 1 to 1, and substract 1 to another

var minOperations = function(n) {
    const arr = []
    for (let i = 0 ; i < n ; i++) {
        arr.push((2 * i) + 1)
    }
    let counter = 0
    if (arr.length % 2 !== 0) {
        let mid = arr[Math.floor(arr.length/2)]
        let left = 0
        let right = arr.length - 1
        while (left < right) {
            while (arr[left] !== mid  && arr[right] !== mid) {
                ++arr[left]
                --arr[right]
                counter++
            }
            ++left
            --right
        }
    } else {
        let midLeft = (arr.length/2) - 1
        let midRight = (arr.length/2)
        while (arr[midLeft] !== arr[midRight]) {
            ++arr[midLeft]
            --arr[midRight]
            counter++
        }
        let mid = arr[midLeft]
        let left = 0
        let right = arr.length - 1
        while (left < midLeft && midRight < right) {
            while (arr[left] !== mid && arr[right] !== mid ) {
                 ++arr[left]
                --arr[right]
                counter++
            }
            ++left
            --right
        }
    }
    return counter
};

//Sample Outputs:
console.log("Should return 9: ", minOperations(6))