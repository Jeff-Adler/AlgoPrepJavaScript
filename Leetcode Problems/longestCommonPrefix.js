const longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return strs[0]
  }

  const testString = strs[0]

  for (let i = testString.length - 1 ; i >= 0 ; i--) {
    const substring = testString.substring(0,i + 1)

    if (strs.every((ele)=> {
      return ele.indexOf(substring) == 0
    })) {
      return substring
    }
  }
  
  return ""
}

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))