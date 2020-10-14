// minSubArrayLength: takes two parameters, array of positive integers and a positive integer.
// Function returns the minimal length of a contiguous subarray of which the sum is greater than or equal to the 
// integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLength = (arr,num) => {
    //i is the window size
    for (let i = 0; i < arr.length ; i++) {
        let temp = 0
        for (let k = 0 ; k <= i ; k++) {
            temp += arr[k]
        }
        for (let j = 1 ; j < arr.length - i; j++) {
            temp = (temp + arr[j + i]) - arr[j - 1]
            if (temp >= num) {
                return i + 1
            }
        }
    }
    return  0
}

// console.log("Should return 2: ", minSubArrayLength([2,3,1,2,4,3], 7))
// console.log("Should return 2: ", minSubArrayLength([2,1,6,5,4], 9))
// console.log("Should return 1: ", minSubArrayLength([3,1,7,11,2,9,8,21,62,33,19],52))
// console.log("Should return 3: ", minSubArrayLength([1,4,16,22,5,7,8,9,10],39))
// console.log("Should return 5: ", minSubArrayLength([1,4,16,22,5,7,8,9,10],55))
// console.log("Should return 2: ", minSubArrayLength([4,3,3,8,1,2,3],11))
// console.log("Should return 0: ", minSubArrayLength([1,4,16,22,5,7,8,9,10],95))

//O(n) solution
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }


  //O(n) solution recreated: 
    //Window starts maximally small at left-edge. if window total is less than target, grow window end
    //if window total is more or equal to target, shrink window start. Save that length to variable.
    //Keep shrinking and saving length to variable till window total is less than target. Grow window again.
    //Shrink when bigger, and always record IF the shrunk length is smaller than previous shrunk length

const minSubArrayLen2 = (nums, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
          }
          // if current window adds up to at least the sum given then
              // we can shrink the window 
          else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
          } 
          // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
          else {
            break;
          }
    }

    return minLen === Infinity ? 0 : minLen
}

console.log("Should return 2: ", minSubArrayLen2([2,3,1,2,4,3], 7))
console.log("Should return 2: ", minSubArrayLen2([2,1,6,5,4], 9))
console.log("Should return 1: ", minSubArrayLen2([3,1,7,11,2,9,8,21,62,33,19],52))
console.log("Should return 3: ", minSubArrayLen2([1,4,16,22,5,7,8,9,10],39))
console.log("Should return 5: ", minSubArrayLen2([1,4,16,22,5,7,8,9,10],55))
console.log("Should return 2: ", minSubArrayLen2([4,3,3,8,1,2,3],11))
console.log("Should return 0: ", minSubArrayLen2([1,4,16,22,5,7,8,9,10],95))