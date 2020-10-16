const selectionSort = (arr) => {
    let minIndex
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i ; j < arr.length; j++) {
            if (arr[j] < arr[i])  {
                minIndex = j
            } 
        }
        swap(arr,i,minIndex)
    }
    return arr
}

const swap = (arr, index1,index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

console.log(selectionSort([0,-1,4,2,9,11,1,100,52,-10,2,2,0]))

console.log(selectionSort([0,1,2,3,4,5,6,7,9,8]))