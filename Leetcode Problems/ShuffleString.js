/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

//Problem: You are a given string. You are given an array of the same length. Each element of the array has the indice that the element originally at [i] should move to. So an array [4] says that the element at [0] should move to indice 4. Write a function that shuffles the string according to the indices array.

//Solution: declare an array of length indices.length. As you loop through indices, insert the appropriate character in s to that appropriate index in array. Flattern and return the array

var restoreString = function(s, indices) {
    const arr = new Array(indices.length)
    
    for (let i = 0 ; i < indices.length ; i++){
        arr[indices[i]] = s[i]
    }
    
    return arr.join("")
};

//Sample Outputs:
// console.log("Should return leetcode: ", restoreString("codeleet",[4,5,6,7,0,2,1,3]))
// console.log("Should return abc: ", restoreString("abc",[0,1,2]))
// console.log("Should return nihao: ", restoreString("aiohn",[3,1,4,2,0]))
// console.log("Should return arigatou: ", restoreString("aaiougrt",[4,0,2,6,7,3,1,5]))
// console.log("Should return rat: ", restoreString("art",[1,0,2]))