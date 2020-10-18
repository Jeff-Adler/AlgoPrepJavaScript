/**
 * @param {number[]} rating
 * @return {number}
 */

//Problem: You get an array of n positive UNIQUE integers. You must return a function that gives the number of combinations that meet one of the following descriptions, given indexes in the left to right order (i,j,k):
    //i < j < k
    // i > j > k 
        //WHERE 0 <= i < j < k < n

//Solution (attempt): 
    //Take each condition independently
        //Condition 1: Find leftmost value that could be [i], find rightmost value that could be [k]. Take all numbers between [i] and [k] that are between the values at [i] and [k]. Divide 
        //Condition 2: Find the leftmost value that could possibly be [i]. Find the right most vaue that could possibly be [k]. Count all numbers between those two numbers in terms of the array and as a number. Divide that number by 3

//Alternative(attempt): Since all values are unique, you could know the maximum possible for either condition, given the length of the array (e.g. [1,2,3,4,5] and [5,4,3,2,1]). Compute that number, and do some math to subtract every time a number does not conform to that order.

//Naive Solution: O(n^3)
    //Loop through array to get i
        //loop through array to get j
            //loop through to get get k

//Shifting Window: Put pointers at leftmost and rightmost possible values. 

var numTeams = function(rating) {
    let counter = 0
    for (let i = 0 ; i < rating.length - 2 ; i++){
        for (let j = i+1 ; j < rating.length - 1 ; j++) {
            for (let k = j+1 ; k < rating.length ; k++) {
                if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
                    counter++
                }
            }
        }
    }
    return counter
};

console.log("Should return 3: ", numTeams([2,5,3,4,1]))
console.log("Should return 0: ", numTeams([2,1,3]))
console.log("Should return 4: ", numTeams([1,2,3,4]))