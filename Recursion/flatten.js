// Flatten: accepts an array of arrays and returns a new array with all values flattened

const flatten = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length ; i++) {
        if (!Array.isArray(arr[i])) {
            newArr.push(arr[i])
        } else {
            newArr = newArr.concat(flatten(arr[i]))
        }
    }
    return newArr
}

console.log("Should return [1, 2, 3, 4, 5]: ",  flatten([1, 2, 3, [4, 5] ]))
console.log("Should return [1, 2, 3, 4, 5]: ",  flatten([1, [2, [3, 4], [[5]]]]))
console.log("Should return [1,2,3]: ",  flatten([[1],[2],[3]]))
console.log("Should return [1,2,3]: ",  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
