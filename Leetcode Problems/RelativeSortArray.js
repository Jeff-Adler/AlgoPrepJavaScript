/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

//Approach: Find all elements in arr1 that match an element in arr2. push onto array, remove them from array. do that with all elements of arr2. sort leftover elements in arr1
var relativeSortArray = function(arr1, arr2) {
    const arr3 = []
    for (let i = 0 ; i < arr2.length ; i++) {
        while (arr1.indexOf(arr2[i]) >= 0) {
            arr3.push(arr2[i])
            arr1.splice(arr1.indexOf(arr2[i]),1)
        }
    }
    
    arr1.sort((ele1,ele2) => {return ele1 - ele2})
    
    return arr3.concat(arr1)
};