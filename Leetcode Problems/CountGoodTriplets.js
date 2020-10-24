/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

//Restatement: You are given an array of integers equal to greater than 0. And, you are given three integres eqaual to greater than 0, a, b, c. YOu need need to find all the GOOD TRIPLETS in the array. A good triplet is one where: 
    //the values are  ordered left to right in the array (althogh not necessarily adjacent)
    //first val - second val <= a, second val - third val <= b, first val - third val <= 3

//Examples
    // arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3 -> 4
    // arr = [1,1,2,2,3], a = 0, b = 0, c = 1 -> 0

//Approach:
    //Naive solution: triple nested loops to test every possible combination against the set of criteria

    //Optimized: Multiple pointers (but not sure how)

    var countGoodTriplets = function(arr, a, b, c) {
        //declare tripCounter
        let tripCounter = 0
        
        //generate every possible combination
        for (let i = 0 ; i < arr.length - 2 ; i++){
            for (let j = i + 1 ; j < arr.length - 1 ; j++) {
                if ((Math.abs(arr[i] - arr[j])) > a) continue
                
                for (let k = j + 1 ; k < arr.length ; k++) {
                    if ((Math.abs(arr[j] - arr[k])) > b) continue
                    if ((Math.abs(arr[i] - arr[k])) > c) continue
                    tripCounter++
                }
            }
        }
        
        // //build helper function that checks if triplet meets a,b,c conditions
        // function isGoodTriplet(val1,val2,val3) {
        //     if ((Math.abs(val1 - val2)) > a) return false
        //     if ((Math.abs(val2 - val3)) > b) return false
        //     if ((Math.abs(val1 - val3)) > c) return false
        //     return true
        // }
        
        return tripCounter
    };