/**
 * @param {number[][]} mat
 * @return {number}
 */

//Recursion: continue deleting the top and bottom row, and the right and left-most edges of arrays. At every recursive loop, add up all the corner values.

var diagonalSum = function(mat) {
    let sum = 0
    
    helper(mat)
    function helper(mat) {
        console.log(mat)
        if (!mat.length || !mat[0].length) return
        
        if (mat.length > 1) {
            sum+=mat[0][0] + mat[0][mat[0].length - 1] + mat[mat.length - 1][0] + mat[mat.length - 1][mat[0].length - 1]
        } else if (mat.length === 1) sum+=mat[0][0]
        
        //eliminates first and last elements from all rows
        mat = mat.map((row) => {
            return (
                row.slice(1, row.length - 1)
            )
        })
        
        //eliminates first and last rows from matrix
        helper(mat.slice(1,mat.length - 1))
    }
    
    return sum
};