/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    var arr = []
    var subArr = []
    for (let l = 0 ; l < n ; l++){
        for (let j = 0 ; j < m ; j++) {
            subArr.push(0)
        }
        arr.push(subArr)
        subArr=[]
    }
    console.log(arr)
    
//     var arr = [...Array(n)].fill([...Array(m)].fill(0))
    
    var row
    var subArr2
//     var subArr
    
    for (let i = 0 ; i < indices.length ; i++) {
        row = parseInt(indices[i][0])
        
        //increment row
        console.log(arr[row])
        console.log(Array.isArray(arr[row]))
        subArr2 = [...arr[row]]
        subArr = arr[row].slice()
        // subArr2 = [...arr[row]]
        console.log(subArr)
        console.log(subArr.map(x => x * 2))
        
        arr[indices[i][0]] = arr[indices[i][0]].map((val) => {return ++val})
        //increment column
        arr = arr.map((row) => {return ++row[indices[i][1]]})
    }
    console.log(arr)
    return arr.length
};

console.log(oddCells(2,3,[[0,1],[1,1]]))