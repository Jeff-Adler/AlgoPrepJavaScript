//MaxSubarraySum: function which accepts an (not necessarily sorted) array of integers and a number called n.
//Function should calculate the maximum sum of n consecutive elements in the array.

//naive solution: this will not at all scale if the array and n get big enough. 
//It will basically be quadratic time.
const maxSubarraySum = (arr, n) => {
    if (n > arr.length) {
        return null
    }
    //this will ensure that max will be set to first loop of nested array
    let max = -Infinity 
    for (let i = 0; i < arr.length - n + 1; i ++) {
        temp = 0
        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

arr1 = [0,2,3,6,7,8,3,4]

console.log(maxSubarraySum(arr1,3))

//O(N) solution
const maxSubarraySum = (arr,num) => {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) {
        return null
    }
    for (let i = 0 ; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length ; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSUm = Math.max(maxSum, tempSum)
    }
    return maxSum
}