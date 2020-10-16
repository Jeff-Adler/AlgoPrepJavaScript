function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        //takes advantage of var
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))

console.log(insertionSort([0,-1,4,2,9,11,1,100,52,-10,2,2,0]))

console.log(insertionSort([0,1,2,3,4,5,6,7,9,8]))