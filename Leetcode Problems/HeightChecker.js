/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sortedHeights = [...heights].sort((a,b) => a - b)
    return heights.filter((ele,index) => ele !== sortedHeights[index]).length
};