// isPalindrome: returns true if the string passed to it is a palindrome. otherwise returns false

const isPalindrome = (str) => {
    if (str.length === 1) {
        return true
    }
    if (str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1,str.length - 1))
    } else {
        return false
    }
}

console.log("Should return false: ", isPalindrome('awesome'))
console.log("Should return false: ", isPalindrome('foobar'))
console.log("Should return true: ", isPalindrome('tacocat'))
console.log("Should return true: ", isPalindrome('amanaplanacanalpanama'))
console.log("Should return false: ", isPalindrome('amanaplanacanalpandemonium'))