/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Problem: majorityElement takes an array of size n. You must return an array with all
//elements in the array that appear more than [n/3] times. Some caveats:
    //Only show each candidate output element ONCE in the output array, even if it appears  more than once in the input.
    //Assume all elements in the array are positive integers, that they are all well-formed

// Time complexity must be linear, space complexity: O(1)

//Approach: Figure out what the minimum number is that a given element must appear
//Create a frequency counter take tracks how many times a number appear in the input
//eliminate everything but the numbers in the object whose values are greater than the min number

//Question: should we round to whole numbers?

//ONLY ONE OR TWO ELEMENTS MAX CAN APPEAR MORE THAN n/3 Times, since its a third!
//Optimized: There can only be max two candidates that appear more than n/3 times. Thus, you can push to an array and still take up O(1) space.

//Optimized
var majorityElement = function(nums) {
    const min = nums.length/3
    const frequencyCounter = {}
    const set = []
    
    for (const element of nums) {
        if (frequencyCounter[element]) {
            ++frequencyCounter[element]
        } else {
            frequencyCounter[element] = 1
        }
    }
    
    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > min) set.push(key)
        //this is unnecessary for smaller data sets, but could speed up the function
        //if you have an object with many key/value pairs
        if (set.length >= 2) return set
    }
    
    return set
};
var majorityElementOriginal = function(nums) {
    const min = nums.length/3
    const frequencyCounter = {}
    
    for (const element of nums) {
        frequencyCounter[element] ? ++frequencyCounter[element] : frequencyCounter[element] = 1
    }
    
    const foundValue = {}
    
    for (let i = 0; i < nums.length; i++) {
        let element2 = nums[i]
        if (foundValue[element2] || frequencyCounter[element2] <= min) {
            nums.splice(i,1)
            --i
        } 
        foundValue[element2] = true
    }

    return nums
};

//Sample Outputs:
console.log("Should return [3]: ", majorityElement([3,2,3]))
console.log("Should return [1]: ", majorityElement([1]))
console.log("Should return [1,2]: ", majorityElement([1,2]))
console.log("Should return [1]: ", majorityElement([1,1,1,1,1,1,1,2,3]))
console.log("Should return [1,3]: ", majorityElement([1,1,1,1,2,3,3,3,3]))