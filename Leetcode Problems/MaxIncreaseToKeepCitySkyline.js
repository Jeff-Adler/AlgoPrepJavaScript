/**
 * @param {number[][]} grid
 * @return {number}
 */

//Approach: for every given building, find the highest building on the x and y axis, make it that value

//This could be much sped up by using an object to record the values of buildings at different positions. See discussion section

var maxIncreaseKeepingSkyline = function(grid) {
    let totalHeight = 0
    for (let i = 0 ; i < grid.length ; i++){
        for (let j = 0 ; j < grid[i].length ; j++) {
            let highestX = 0
            let highestY = 0
            //for every building find heightest building in its column
            for(const row of grid) {
                highestX=Math.max(highestX,row[j])
            }
            //for every building find heightest building in its row
            for(const building of grid[i]){
                highestY=Math.max(highestY,building)
            }
            let originalHeight = grid[i][j]
            //set building to the lower of the two highest values
            grid[i][j] = Math.min(highestX,highestY)
            totalHeight += (grid[i][j] - originalHeight)
        }
    }
    return totalHeight
};