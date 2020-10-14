// Reverse: accepts a string and returns a new string in reverse

const reverse = (str,newStr="") => {
    if (str.length === 0) return newStr
    newStr = newStr.concat(str[str.length - 1])
    return reverse(str.substring(0, str.length - 1),newStr)
}

console.log("should return 'emosewa': ", reverse('awesome'))
console.log("should return 'loohcsmhtir': ", reverse('rithmschool'))