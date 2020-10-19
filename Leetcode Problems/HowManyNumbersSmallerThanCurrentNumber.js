/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Problem: You are given an array, nums, (of length greater than 2) of positive integers between 0 and 100.
//Write a function that returns an array. This arary will indicate all the values lower than array[i] for the value at nums[i].

//Naive Solution: loop through nums left to right. Within each iteration of the loop, loop through entire array and find all the smaller numbers

var smallerNumbersThanCurrent = function(nums) {
    const arr = []
    for (let i = 0 ; i < nums.length ; i++) {
        let counter = 0
        for (let j = 0 ; j < nums.length ; j++) {
            if (nums[i] > nums[j]) counter++
        }
        arr.push(counter)
    }
    return arr
    
    // return nums.map(num => nums.reduce((acc,cur) => acc + (num > cur),0));
};

//Sample Outputs:
// console.log("Should return [4,0,1,1,3]", smallerNumbersThanCurrent([8,1,2,2,3]))
// console.log("Should return [2, 1, 0, 3]", smallerNumbersThanCurrent([6,5,4,8]))
// console.log("Should return [0,0,0,0]", smallerNumbersThanCurrent([7,7,7,7]))