/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let maxLength = -1
    for (let i = 0 ; i < s.length - 1 ; i++) {
        for (let j = i + 1 ; j < s.length ; j++) {
            if (s[i] === s[j]) {
                if (j - (i+1) > maxLength) maxLength = j - (i+1)
            }
        }
    }
    return maxLength
};