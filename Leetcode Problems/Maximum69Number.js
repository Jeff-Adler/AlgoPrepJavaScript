/**
 * @param {number} num
 * @return {number}
 */

//Restatement: You are given a positive consisting only of the digits 6 and 9. Write a function that finds that maximum number you can get by flipping at most one digit

//Example: 9669 --> 9969

//Approach: Change integer to array. find the first 6, scanning from left to right. Change it to 9. Convert to int, return

var maximum69Number  = function(num) {
    //Convert int to string
    num = num.toString().split("")
    
    //Find first 6 in string and flip to 9
    num[num.indexOf("6")] = "9"
    
    //return int
    return parseInt(num.join(""))
};