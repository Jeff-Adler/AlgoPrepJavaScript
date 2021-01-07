/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let nums1Sorted = nums1.sort((num1,num2) => num1 - num2)
    let nums2Sorted = nums2.sort((num1,num2) => num1 - num2)
    const intersection = []
    let index

    let i = 0
    while (nums1Sorted.length) {
        index = nums2Sorted.indexOf(nums1Sorted[i])
        if (index >= 0) {
            intersection.push(nums1Sorted[i])
            nums2Sorted = nums2Sorted.slice(index + 1)
        }
        nums1Sorted.shift()
    }
            
    return intersection
};