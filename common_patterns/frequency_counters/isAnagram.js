//Check if, given two strings, the two strings are anagrams
//assume all inputs are single words, with only lowercase letters

//Approach: 
    //Ensure strings are the same length. If they are not, they cannot be anagrams.
    //Make two objects, for each string respectively, that records every character in a string as keys
    //Record frequency of each character in a string as value of corresponding key
    //Loop through one object and ensure second object has that key
    //Ensure that value of that key for obj2 is same as value for that key in obj1

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (const element of str1) {
        frequencyCounter1[element] = ++frequencyCounter1[element] || 1
    }
    for (const element of str2) {
        frequencyCounter2[element] = ++frequencyCounter2[element] || 1
    }
    for (const key in frequencyCounter1) {
        if (!frequencyCounter2.hasOwnProperty(key)) {
            return false
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

const arr1 = ["j","e","f","f"]
const arr2 = ["f","f","e","j"]
const arr3 = [,"f","e","j"]
const arr4 = [,"f","e","j","z"]
const arr5 = ["f","f","e","j","j"]

console.log("Should be True:", isAnagram(arr1,arr2))
console.log("Should be False:", isAnagram(arr1,arr3))
console.log("Should be False:", isAnagram(arr1,arr4))
console.log("Should be False:", isAnagram(arr1,arr5))

//alternative solution
const isAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let lookup = {}
    for (const element of str1) {
        lookup[element] ? lookup[element] += 1 : lookup[element] = 1
    }
    for (const element of str2) {
        if (!lookup[element]) {
            return false
        } else {
            lookup[element] -= 1
        }
    }
    return true
}

const array1 = ["j","e","f","f"]
const array2 = ["f","f","e","j"]
const array3 = [,"f","e","j"]
const array4 = [,"f","e","j","z"]
const array5 = ["f","f","e","j","j"]

console.log("Should be True:", isAnagram2(array1,array2))
console.log("Should be False:", isAnagram2(array1,array3))
console.log("Should be False:", isAnagram2(array1,array4))
console.log("Should be False:", isAnagram2(array1,array5))