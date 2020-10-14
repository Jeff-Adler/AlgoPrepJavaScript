//MaxSubarraySum: function which accepts ab (not necessarily sorted) array of integers and a number called n.
//Function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr,num) => {
    if (arr.length < num) {
        return null
    }
    let max = 0
    for (let k = 0; k < num ; k++) {
        max += arr[k]
    }
    let j = num
    let temp = max
    for (let l = 1 ; l < arr.length - num + 1; l++) {
        temp = ((temp + arr[j]) - arr[l - 1])
        if (temp > max) {
            max = temp
        }
        j++
    }
    return max
}


console.log("Should return 700: ", maxSubarraySum([100,200,300,400],2))
console.log("Should return 39: ", maxSubarraySum([1,4,2,10,23,3,1,0,20],4))
console.log("Should return 5: ", maxSubarraySum([-3,4,0,-2,6,-1],2))
console.log("Should return 5: ", maxSubarraySum([3,-2,7,-4,1,-1,4,-1,1],2))
console.log("Should return null: ", maxSubarraySum([2,3],3))