const twoSum = function(nums,target) { 
  const numberMap = {}

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]

    const difference = target - number

    if (numberMap.hasOwnProperty(difference)) {
      return [numberMap[difference], i]
    }

    numberMap[number] = i 
    console.log(numberMap)
  }

  return
}

console.log(twoSum([2,7,11,15], 9))