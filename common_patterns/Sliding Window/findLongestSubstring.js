// findLongestSubstring: accepts a string and returns the length of the Longest
// Substring with all distinct characters.


//My logic:
    //Make maximally small window.
    //If no characters repeat: grow by 1
    //If characters repeat, shrink by 1

const findLongestSubstring = (str) => {
    if (str === "") {
        return 0
    }
    let start = 0
    let end = 1
    let maxLen = -Infinity
    let subString = str.substring(start,end)
    while (start < str.length) {
        subString = str.substring(start,end)
        maxLen=Math.max(maxLen, subString.length)
        if (!subString.includes(str[end]) && end < str.length) {
            end++
        }
        else if (subString.includes(str[end])) {
            start++
        }
        else {
            break
        }
    }
    return maxLen
}

console.log("Should print 0:", findLongestSubstring(""))
console.log("Should print 7:", findLongestSubstring("rithmschool"))
console.log("Should print 6:", findLongestSubstring("thisisawesome"))
console.log("Should print 7:", findLongestSubstring("thecatinthehat"))
console.log("Should print 1:", findLongestSubstring("bbbbbb"))
console.log("Should print 8:", findLongestSubstring("longestsubstring"))
console.log("Should print 6:", findLongestSubstring("thisishowwedoit"))

console.log("Should print 6:", findLongestSubstring("abcxyzabc"))
console.log("Should print 6:", findLongestSubstring("abcxyzcba"))
console.log("Should print 4:", findLongestSubstring("aaaxyzaaa"))