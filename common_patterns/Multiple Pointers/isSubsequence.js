// isSubsequence: takes in two strings and checks whether the 
// characters in the first string form a subsequence of the characters
// in the second string. 
//The substring can have characters in between, but order can't change

const isSubsequence = (str1, str2) => {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    //this works because its okay if the subsequence has characters intervening in the superstring
    while (j < str2.length) {
      if (str2[j] === str1[i]) {
        i++; 
      } 
      if (i === str1.length) {
        return true;
      }
      j++;
    }
    return false;
}

console.log("Should be true: ", isSubsequence("hello","hello world"))
console.log("Should be true: ", isSubsequence("sing","sting"))
console.log("Should be true: ", isSubsequence("abc","abracadabra"))
console.log("Should be false: ", isSubsequence("abc","acb"))