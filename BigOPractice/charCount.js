const charCount = (str) => {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0)
    if(
        !(code > 47 && code < 58) && //numeric
        !(code > 64 && code < 91) && //uppercase char
        !(code > 96 && code < 123) //lowercase char
    ) {
        return false
    }
    return true
}

console.log(charCount("Jeff"))