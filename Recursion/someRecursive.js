// someRecursive: accepts array and a callback. Function retursn true if a singel in the 
// array return true when passed to the callback. Otherwise it returns fals

function someRecursive(inputs,func){
    if (inputs.length === 0) {
        return false
    }
    if (func(inputs[inputs.length - 1])) {
        return true
    } else {
        return someRecursive(inputs.slice(0,inputs.length - 1),func)
    }
}


const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd))  // false
console.log(someRecursive([4,6,8], val => val > 10)) // false
