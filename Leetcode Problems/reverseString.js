/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let start = 0
    // let end = s.length - 1 
    // let temp = ""
    // while (start < end) {
    //     temp = s[start]
    //     s[start] = s[end]
    //     s[end] = temp
    //     start++
    //     end--
    // }
    // return s
    
    for (let i = 0 ; i < Math.floor(s.length/2) ; i++) {
        temp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = temp
    }
    return s
};