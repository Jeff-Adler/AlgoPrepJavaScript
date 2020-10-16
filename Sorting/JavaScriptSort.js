function numberCompare(num1,num2) {
    return num1 - num2
}

function compareByLen(str1,str2) {
    return str1.length - str2.length
}

console.log([6,4,15,19].sort(numberCompare))