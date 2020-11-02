/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const originalVal = n
    const storage = []
    
    while (n > 1) {
        nSplit = n.toString().split("")
        n = 0
        for (const digit of nSplit) {
            n += parseInt(digit ** 2)
        }
        storage.push(n)
        if (storage.indexOf(n) !== (storage.length - 1)) return false
    }
    return true
};