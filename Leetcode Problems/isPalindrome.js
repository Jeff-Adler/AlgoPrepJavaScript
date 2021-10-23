var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  const num = x.toString()

  let i = 0;
  let j = num.length - 1;
  
  while (i < j) {
    if (num[i] != num[j]) {
      return false
    }
    i++
    j--
  }

  return true
};

console.log(isPalindrome(121))

var isPalindrome2 = function(x) {
  const original = x.toString();
  const reversed = x.toString().split("").reverse().join("");
  return original === reversed;
};