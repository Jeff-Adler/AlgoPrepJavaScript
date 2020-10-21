/**
 * @param {number} n
 * @return {number}
 */

//Problem: You are given an integer n. Get the product of each digit in n. Get the sum of each digit in n. Subtract the sum from the product, and return that value.

//Approach: 
//Pulling out the values: Divide n by powers of 10, take exponent
//Other approach: turn into string

var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    while (n){
        let digit = n % 10
        product *= digit
        sum += digit
        n = Math.floor(n/10)
    }
    return product - sum
};

//Sample Outputs:
// console.log("Should return 15: ", subtractProductAndSum(234))
// console.log("Should return 21: ", subtractProductAndSum(4421))