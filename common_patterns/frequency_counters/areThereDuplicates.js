//areThereDuplicates: accepts variable number of arguments
//and checks if any of those arguments are duplicates
//I'm assuming these args can't be arrays, objects, etc.

function areThereDuplicates() {
    const arr = [...arguments]
    const frequencyCounter = {}
    for (let i = 0 ; i < arr.length; i++) {
        if (!frequencyCounter[arr[i]]) {
            frequencyCounter[arr[i]] = 1 
        } else {
            return true
        }
    }
    return false
}

console.log("Should return true: ", areThereDuplicates(1,1,2))
console.log("Should return true: ", areThereDuplicates("a","a","b"))
console.log("Should return true: ", areThereDuplicates("a","c","a","b"))
console.log("Should return false: ", areThereDuplicates("a","c","b"))
console.log("Should return false: ", areThereDuplicates(1,2,3,4))