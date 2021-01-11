/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibArr = [0,1]
    
    for (let i = 2 ; i <= n ; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
    }
    
    return fibArr[n]
};