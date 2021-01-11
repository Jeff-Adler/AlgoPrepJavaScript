/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === "" && B === "") return true
    let counter = A.length
    while (counter > 0){
        if (A === B) return true
        A = A.substring(1) + A.substring(0,1)
        counter--
    }
    return false
};