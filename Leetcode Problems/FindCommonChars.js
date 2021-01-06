/**
 * @param {string[]} A
 * @return {string[]}
 */
// for every character in the first word, find that character in all other words. If the character is found, add it to output array. Delete a character as its found
var commonChars = function(A) {
    let dups = []
    let char = ""
    let bool = true
    let foundChar
    
    for (let i = 0 ; i < A[0].length ; i++) {
        char = A[0][i]
        
        for (let j = 1 ; j < A.length ; j++) {
            foundChar = A[j].indexOf(char)
            if (foundChar < 0) {
                bool = false
            } else {
                A[j] = A[j].slice(0,foundChar) + A[j].slice(foundChar + 1)
            }
        }
        
        if (bool === true) {
            dups.push(char)
        }
        bool = true
        A[0] = A[0].slice(1)
        --i
    }
    
    return dups
};