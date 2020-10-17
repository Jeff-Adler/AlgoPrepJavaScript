/**
 * @param {number} num
 * @return {number}
 */

//Problem: Given some positive integer as input, reduce it to zero. To reduce the input, you must use the following two operations: if the CURRENT number (that is, the initial input or the result of an operation) is even, divide by 2. If the odd, subtract 1.

//Inputs: Any positive integer. Number will be greater than 0, less than 10^6. Will not be anything other than a positive integer

//Approach 1: Declare counter. Start a while loop. While current number doesn't equal 0, keep looping. Within loop body: if number is even, divide number by 2, increment counter. If number is odd, subtract 1, increment conter. Return Counter
    //Time Complexity: O(N)

//Approach 2: Declare Counter. Create a recursive helper method that will continually call itself until base case is reached, where input = 0. Call the function with an input divided by , or subtracted by 1. Increment counter for each call.
    //Time Complexity: O(N)

//Optimization: Check if log(based 2) of (input) is an integer. If so. Return that log(input) + 1
    //Time Complexity: O(1) (assuming Math.log2 is O(1))

    var numberOfSteps  = function(num) {
        if (Number.isInteger(Math.log2(num))) {
            return Math.log2(num) + 1
        }
        let counter = 0
        
        const helper = (numHelper) => {
            if (numHelper === 0) return 
            ++counter
            if (numHelper % 2 === 0) {
                return helper(numHelper/2)
            } else {
                return helper(numHelper - 1)
            }
        }
        
        helper(num)
        
        return counter
    };
    
    //Sample Inputs
    console.log("Expected answer should be 6: ", numberOfSteps(14))
    console.log("Expected answer should be 4: ", numberOfSteps(8))
    console.log("Expected answer should be 12: ", numberOfSteps(123))
    console.log("Expected answer should be 1: ", numberOfSteps(1))