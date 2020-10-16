const bubbleSort = (arr) => {

    //for nearly-sorted array optimization
    let noSwaps
    for (let i = arr.length; i >= 0; i--) {
        noSwaps = true
        for (let j = 0 ; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr,j,j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }

    return arr
}

const swap = (arr, index1,index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const es2015swap = (arr,index1,index2) => {
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
}

console.log(bubbleSort([0,-1,4,2,9,11,1,100,52,-10,2,2,0]))

console.log(bubbleSort([0,1,2,3,4,5,6,7,9,8]))

