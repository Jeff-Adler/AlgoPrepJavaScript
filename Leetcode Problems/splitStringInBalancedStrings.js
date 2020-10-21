/**
 * @param {string} s
 * @return {number}
 */

//Problem: You are a given a string with only R and L characters. A balanced string is one with equal numbers of R and L characters. The input string is balanced. Write a function that returns the max number of balanced strings you can split the string into, while making sure that EVERY substring is balanced.

//Approach: Find all LR or RL patterns. Remove them from the string Find all strings with equal numbers of RL and

//Recursion Problem: Split at RL/LR sequences. Continue doing this while left and right are balanced

//Optimized Approach: Mergesort-like approach. Split the array into individual elements. Merge them until they are balanced. Once balanced, stop.

var balancedStringSplit = function(s) {
    let maximumAmount = 0;
    let count = 0;
    for(let current of s){
        (current==='L') ? count++ : count--;
        if(count===0){
            maximumAmount++;
        }
    }
    return maximumAmount;
};

//Sample Outputs:
console.log("Should return 4: ", balancedStringSplit("RLRRLLRLRL"))
console.log("Should return 3: ", balancedStringSplit("RLLLLRRRLR"))
console.log("Should return 1: ", balancedStringSplit("LLLLRRRR"))
console.log("Should return 2: ", balancedStringSplit("RLRRRLLRLL"))
console.log("Should return 2: ", balancedStringSplit("RRLLRRLL"))
console.log("Should return 2: ", balancedStringSplit("RLLRLRRL"))