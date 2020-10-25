/**
 * @param {number[]} A
 * @return {number}
 */

//Restatement: You are given an array, A, as input. In this array, there are N + 1 unique elements, where N is the length of the array/2. Exactly one element in the array is repeated N times. Return element repeated N Times

//Examples:
    //[1,2,3,3] -> 3

// Approach:Iterate through array. add elements to frequency counter. once an element's value is equal to N, return it.

var repeatedNTimes = function(A) {
    let frequencyCounter = {}
    for (const element of A) {
        frequencyCounter[element] ? ++frequencyCounter[element] : frequencyCounter[element] = 1
        if (frequencyCounter[element] > 1) return element
    }
};