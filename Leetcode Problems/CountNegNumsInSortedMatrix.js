/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {    
    return grid.flat().filter((num) => {
        return (
            num < 0
        )
    }).length
};