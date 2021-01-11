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

var fibRec = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibRec(n - 1) + fibRec(n - 2);
    }
};