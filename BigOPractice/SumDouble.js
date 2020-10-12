function sum(arr) {
    //one number in memeory
    let total = 0
    //another number in memory
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

//O(1) space, because the # of variables created is not bound to the length of the array

function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}

//O(n) space, because the length of the new array is proportionate to the length of the input array