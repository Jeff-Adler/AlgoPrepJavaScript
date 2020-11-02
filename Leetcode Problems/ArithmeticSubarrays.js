/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

//Restatement: Function takes takes 3 arguments: (1) nums, which is an array of integers, (2) l, which specifics the left index in nums for a search query, (3) r, which specifics the right index. l and r are guarenteed to be the same length

//Examples: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5] => [true,false,true]
// nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10] => [false,true,false,false,true,true]

var checkArithmeticSubarrays = function(nums, l, r) {
    const isArithmetic = []
    let window = []
    let tracker = {}
    
    for (let i = 0 ; i < l.length ; i++) {
        tracker = {}
        window = nums.slice(l[i],r[i]+1)

        window = window.sort((a,b) => {return b - a})
                
        for (let j = 0 ; j < window.length - 1 ; j++) {
            tracker[window[j] - window[j+1]] = 1
        }
        
        if (Object.keys(tracker).length === 1) isArithmetic.push(true)
        else isArithmetic.push(false)
    }
        
    return isArithmetic
};