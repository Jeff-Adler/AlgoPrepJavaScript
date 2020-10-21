/**
 * @param {number[]} arr
 * @return {number}
 */

//Problem: You are given an array of positive integers, arr. A subarray of arr is a contiguous subsequence of arr. YOu need to calculate the sum of all possible odd-length subarrays. 

//Approach: Sliding Window Approach. Start with window of size [1]. If window is less than or equal to arr.length - 1, and window.length % 2 !== 0, move array forward, adding up every value in the array. increase window by 2, do the same.
    // O(n^3)

//Optimized Approach: Use reduce in some clever way

var sumOddLengthSubarrays = function(arr) {
    let total = 0
    let window = 0
    let n = arr.length
    while (window <= n) {
        for (let i = 0 ; i + window < n ; i++) {
            for (let j = i ; j <= i + window ; j++) {
                total += arr[j]
            }
        }
        window += 2
    }
    
    return total
};

//Sample Outputs
// console.log("Should return 58: ", sumOddLengthSubarrays([1,4,2,5,3]))
// console.log("Should return 3: ", sumOddLengthSubarrays([1,2]))
// console.log("Should return 66: ", sumOddLengthSubarrays([10,11,12]))