/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

//Problem: Given an array of length 2*n, where you are given the array and are told the size of n, shuffle the array [x,x+n, x+1, x+1+n]etc.

//Approach: Loop from i = 0 to n - 1. In every iteration of the loop, simply push nums[i], nums[i+n] to new array

//Approach two: Start pointer1 at nums[0] and pointer2 nums[n]. For n iterations of a loop, push nums[pointer1] and nums[pointer2] to array. Increment pointers
    //Time Complexity: O(n)

    var shuffle = function(nums, n) { 
        let pointer1 = 0
        let pointer2 = n
        let shuffledNums = []
        
        while (pointer1 < n && pointer2 < nums.length) {
            shuffledNums.push(nums[pointer1])
            shuffledNums.push(nums[pointer2])
            ++pointer1
            ++pointer2
        }
        
        return shuffledNums
    };
    
    //Sample Inputs:
    console.log("Should return [2,3,5,4,1,7]: ", shuffle([2,5,1,3,4,7],3))
    console.log("Should return [1,4,2,3,3,2,4,1]: ", shuffle([1,2,3,4,4,3,2,1],4))
    console.log("Should return [1,2,1,2]: ", shuffle([1,1,2,2],2))
    console.log("Should return [1,4,2,3,3,2,4,9,4,8]: ", shuffle([1,2,3,4,4,3,2,1,9,8],5))
    