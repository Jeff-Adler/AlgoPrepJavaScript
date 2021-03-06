//given two sorted arrays, returns array with ALL elements from both arrays, fully sorted
//should run in O(n + m) time and space. (where n and m are the input arrays)
//SHOULD NOT modify parameters passed to it
const merge = (sortedArr1, sortedArr2) => {
    const arr = []
    let i = 0
    let j = 0
    //This will terminate when both pointers reach the end of the array
    while (!(i >= sortedArr1.length && j >= sortedArr2.length)) {
        if (sortedArr1[i] && sortedArr2[j]) {
            if (sortedArr1[i] <= sortedArr2[j]) {
                arr.push(sortedArr1[i])
                ++i
            } else {
                arr.push(sortedArr2[j])
                ++j
            }
        }
        if (i === (sortedArr1.length) && j < (sortedArr2.length)) {
            arr.push(sortedArr2[j])
            ++j
        } else if (j === (sortedArr2.length) && i < (sortedArr1.length)) {
            arr.push(sortedArr1[i])
            ++i
        }
    }

    return arr
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

console.log(mergeSort([9,8,7,6,5,4,3,2,1]))
console.log(mergeSort([9,7,8,5,6,3,4,1,2]))
console.log(mergeSort([1000,2,9,7,823,5,66,3,4,143,2]))

// console.log("Should return [1,2,3,4,5,6]: ", merge([1,3,5],[2,4,6]))
// console.log("Should return [1,2,3,4,5,6]: ", merge([1,2,3],[4,5,6]))
// console.log("Should return [1,2,3,4,5,6]: ", merge([2,3,5],[1,4,6]))
// console.log("Should return [1,2,3,4,5,6]: ", merge([1,5,6],[2,3,4]))
// console.log("Should return [1,1,3,4,5,6]: ", merge([1,5,6],[1,3,4]))
// console.log("Should return [1,1,3,4,5]: ", merge([1,5],[1,3,4]))
// console.log("Should return [1,1,3,5,6]: ", merge([1,5,6],[1,3]))
// console.log("Should return [1,2,3,5,6,100,200]: ", merge([100,200], [1,2,3,5,6]))

//Colt Solution:
function merge2(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    //This will terminate when one of the pointers reaches the end of the array
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}