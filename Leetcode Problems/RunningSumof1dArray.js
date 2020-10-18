/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Problem: Given an array of integers (positive and negative), return an array where the the entry at [i] will equal the sum of all entries in input array from nums[0] to nums[i]

//Naive Solution
//Solution: Start from right side of array, sum up everything before it, loop backwards in array
    //Time Complexity: O(N^2)

//Optimized SOlution:Loop left to right, adding i - 1 to i

var runningSum = function(nums) {
    for (let i = 1 ; i < nums.length ; i++){
        nums[i] += nums[i-1]
    }
    return nums
};

//Sample Outputs:
console.log("Should return [1,3,6,10]: ", runningSum([1,2,3,4]))
console.log("Should return [1,2,3,4,5]: ", runningSum([1,1,1,1,1]))
console.log("Should return [3,4,6,16,17]: ", runningSum([3,1,2,10,1]))
console.log("Should return [3,4,6,16,17,16]: ", runningSum([3,1,2,10,1,-1]))