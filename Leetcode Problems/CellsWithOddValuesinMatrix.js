/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    
    var arr = [...Array(n)]
    for (let k = 0 ; k < arr.length ; k++) {
        arr[k] = ([...Array(m)].fill(0))
    }

    for (let l = 0 ; l < indices.length ; l++) {
        //increment row
        for (let i = 0 ; i < arr[0].length ; i++) {
            arr[indices[l][0]][i]++
        }

        //increment column
        for (let j = 0 ; j < arr.length ; j++) {
            arr[j][indices[l][1]]++
        }
    }
    return arr.flat().filter(val => {return val % 2 !== 0}).length
};

console.log(oddCells(2,3,[[0,1],[1,1]]))