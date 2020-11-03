/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let maxWidth = 0
    
    pointsSorted = points.sort((arr1,arr2) => {
        return (
            arr1[0] - arr2[0]
        )
    })
    
    let dist = 0
    for (let i = 0 ; i < pointsSorted.length - 1 ; i++) {
        dist = pointsSorted[i + 1][0] - pointsSorted[i][0]
        if (dist > maxWidth) maxWidth = dist
    }
    
    return maxWidth
};