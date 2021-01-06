/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const midPoint = Math.floor(n/2)
    
    let counter = 0 - midPoint
    
    let uniqueArr = []
    
    while (counter <= midPoint) {
        uniqueArr.push(counter)
        counter++
    }
    
    if (n % 2 === 0) {
        uniqueArr = uniqueArr.slice(0,midPoint).concat(uniqueArr.slice(midPoint+1))
    }
    
    return uniqueArr
};