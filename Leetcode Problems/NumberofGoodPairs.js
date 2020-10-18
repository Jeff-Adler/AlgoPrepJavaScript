/**
 * @param {number[]} nums
 * @return {number}
 */

//Problem: You are given an array of integers between 1 and 100. Write a function that returns the # of pairs
//such that nums[i] and nums[j] are equal, where i is less than j.

//Naive Approach: Declare counter. For every element in nums, find all elements to the right in the array equal to it. Increment counter by one for each match.

//Optimized Approach: Use an object/hash table to record the index of every element. Since you're moving right to left, you know that, if you've seen an element, it's repeated

var numIdenticalPairs = function(nums) {
    
    const helper = (num, counter = 0) => {
        if (num === 0) return counter
        counter+=num 
        return helper(--num, counter)
    }
    
    let indexTracker = {}
    for (let i = 0 ; i < nums.length ; i++) {
        indexTracker[nums[i]] ? indexTracker[nums[i]].push(i) : indexTracker[nums[i]] = [i]
    }
    let counter = 0
    for (const key in indexTracker) {
        if (indexTracker[key].length > 1) {
            counter += helper(indexTracker[key].length - 1)
        }
    }
       
    return counter
};

// Sample inputs:
console.log("Should return 4: ", numIdenticalPairs([1,2,3,1,1,3]))
console.log("Should return 6: ", numIdenticalPairs([1,1,1,1]))
console.log("Should return 0: ", numIdenticalPairs([1,2,3]))