//averagePair: Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where 
//the average of the pair equals the target average. There
//may be more than one

const averagePair = (arr,target) => {
    if (arr.length === 0) {
        return false
    }
    let i = 0
    let j = arr.length - 1
    while (j > i) {
        if (((arr[i] + arr[j])/2) > target) {
            j--
        } else if (((arr[i] + arr[j])/2) < target) {
            i++
        } else {
            return true
        }
    }
    return false
}

console.log("Should be true: ", averagePair([1,2,3], 2.5))
console.log("Should be true: ", averagePair([1,3,3,5,6,7,10,12,19], 8))
console.log("Should be false: ", averagePair([-1,0,3,4,5,6],  4.1))
console.log("Should be false: ", averagePair([],4))
