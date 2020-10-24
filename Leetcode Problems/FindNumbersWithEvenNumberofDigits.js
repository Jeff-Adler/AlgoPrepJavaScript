/**
 * @param {number[]} nums
 * @return {number}
 */

//Restatement: You are given an array of positive integers. Write a function that returns the number of those integers that have an even number of digits (i.e. 12 vs 123)

//Examples:

//Approach: Iterate through nums. For every element, see how many times you can divide by 10 before you reach a number less than 0. If you can divide by an ODD number of times, teh number has even digits (because e.g. 10/10 is 1, 1/10 is 1/10)

//Optimize: map every integer to a string. Count the number of elements for which element.length % 2 is 0

var findNumbers = function(nums) {
    return nums.filter(int => {return (int.toString().length) % 2 === 0}).length
};

// var findNumbers = function(nums) {
//     let evenNums = 0
//     let divisionCounter
    
//     //loop through nums
//     for (const element of nums){
//         //while quotient is greater than or equal to 1, divide num by 10
//         let elementCopy = element
//         divisionCounter = 0
//         while ((elementCopy/10) >= 1){
//             elementCopy = elementCopy/10
//             divisionCounter++
//             //increment for each time (inner) loop iterates
//         }
//         //if counter is odd increment counter of nums with even numbers
//         console.log(divisionCounter)
//         if (divisionCounter % 2 !== 0) evenNums++
//     } 
//     return evenNums
// };