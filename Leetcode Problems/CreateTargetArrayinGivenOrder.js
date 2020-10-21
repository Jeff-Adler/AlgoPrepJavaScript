/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

//Problem: You are given two arrays of integers greater than or equal to 0, num and index, of equal length. Write a function that takes the VALUE of the element in num equal to the value at [i] of index, and puts in a new array at the index equal to the value of index[i]

//Approach: Declare empty array. Iterate through index. Find the value in nums equal to [i], insert (with splice) into array at index[i]
    //O(n)

//Alternative approach: use map/reduce in some clever way, or forEach

var createTargetArray = function(nums, index) {
    const arr = []
    for (let i = 0 ; i < index.length ; i++) {
        arr.splice(index[i],0,nums[i])
    }
    return arr
};

//Sample Outputs:
// console.log("Should return [0,4,1,3,2]: ", createTargetArray([0,1,2,3,4],[0,1,2,2,1]))
// console.log("Should return [0,1,2,3,4]: ", createTargetArray([1,2,3,4,0],[0,1,2,3,0]))
// console.log("Should return [1]: ", createTargetArray([1],[0]))