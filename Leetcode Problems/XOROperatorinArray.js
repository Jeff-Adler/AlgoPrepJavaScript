/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = []
    
    let i = 0
    
    while (i < n) {
        nums.push(start + (2*i))
        i++
    }
    
    const num = nums.reduce((a,b) => {
        return(a ^ b)
    })
    
    return num
};

console.log("Should return 8: ", xorOperation(5,0))
console.log("Should return 8: ", xorOperation(4,3))
console.log("Should return 7: ", xorOperation(1,7))
console.log("Should return 2: ", xorOperation(10,5))