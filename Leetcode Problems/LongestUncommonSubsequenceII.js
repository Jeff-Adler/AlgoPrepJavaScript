/**
 * @param {string[]} strs
 * @return {number}
 */

//Restate: You are given a list of strings, strs, as an input. The function should find the longest subsequence found in any of the strings in strs that is uncommon to the rest of any of the other strings. In otherwords, how big a string can you find in any of the strings, that won't be found in another string. If there isn't one, return -1
// Question: A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. So you can delete middle characters??

//Approach: Get every single substring in every string. Store them in an object with substring as key, value as 1. 

//Code: Get every substring. Find the lengths of whichever subsequences have a frequency of 1. Take the one with the longest

var findLUSlength = function(strs) {
    //declare substrings obj, length variable
    const substrs = {}
    let uniqueSubstrs = []
    let longestSubstr = -1
    
    //generate all possible substrings for strs. Track frequency in substrs
        //iterate through strs
    for (const str of strs) {
        //for each str, loop through the string. For each character, loop to the end
        for (let i = 0 ; i < str.length ; i++) {
            for (let j = 1 ; j <= str.length ; j++ )
                {
                    let substr = str.slice(i,j)
                    substrs[substr] ? ++substrs[substr] : substrs[substr] = 1
                }
        }
    }
    
    //Extract all substrings whose frequency (= value) is 1 into uniqueSubstrs
    for (const substr in substrs) {
        if (substrs[substr] === 1) uniqueSubstrs.push(substr)
    }
        
    //if there are no unique substrings, return -1
    if (!uniqueSubstrs.length) return - 1
    
    console.log(uniqueSubstrs)
    
    //make sure the unique substrings arent found in other strings by deleting characters in the middle
    //Note: We could have just done this from the beginning rather than first collecting all (potential)       unique substrings, but because thats extremely time/memory intensive, it could actually be more        efficient to first filter subsequences that repeat without deleting middle characters
    for (let k = 0 ; k < uniqueSubstrs.length ; k++) {
        
        //since the substring will be found in the string it was originally extracted from, we have to only discount to the potential unique if strCount > 1
        let strCount = 0
        for (const str of strs) {
            let j = 0
            for (let i = 0 ; i < str.length ; i++) {
                if (str[i] === uniqueSubstrs[k][j]) j++ 
                if (j >= uniqueSubstrs[k].length) {
                    strCount++
                    break
                } 
                
            }
        }
        //removes potential unique if not actually unique
        if (strCount > 1){

            uniqueSubstrs.splice(k,1)
            k--
        }
    }
    
    console.log(uniqueSubstrs)
        
    //if there are no unique substrings, return -1
    if (!uniqueSubstrs.length) return - 1
    
    //map unique Substrs to length
    uniqueSubstrs = uniqueSubstrs.map((a) => {
        return (
            a.length
        )
    })
    
    return uniqueSubstrs.reduce((a,b) => {
        return (
            Math.max(a,b)
        )
    })
    
};

//Examples (not sure if correct!)
// console.log("Should return -1: ",findLUSlength(["a","a","a"]))
// console.log("Should return 3: ",findLUSlength(["aba","cdc","eae"]))
// console.log("Should return 9: ",findLUSlength(["aba","abacdceae","abaeae"]))
// console.log("Should return 6: ",findLUSlength(["aaaaab","aaaaa","aaaaa"]))
// console.log("Should return 2: ",findLUSlength(["ab","aaaaa","aaaaa"]))