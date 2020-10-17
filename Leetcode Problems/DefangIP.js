/**
 * @param {string} address
 * @return {string}
 */

//Problem: given some IP address, return an IP address with square brackets around the periods

//Input: Valid IP Address

//Solution: iterate through string. For every period, splice bracket before and after period. Fast forward [i] where necessary

//naive solution
var defangIPaddr = function(address) {
    let defangedIP = address
    for (let i = 0 ; i < defangedIP.length ; i++) {
        if (defangedIP[i] === ".") {
            defangedIP = defangedIP.slice(0,i) + "[" + defangedIP.slice(i,i+1) + "]" + defangedIP.slice(i+1)
            i++
            i++
        }
    }
    return defangedIP
};

//Sample Inputs:
console.log("Should return 1[.]1[.]1[.]1: ", defangIPaddr("1.1.1.1"))
console.log("Should return 255[.]100[.]50[.]0: ", defangIPaddr("255.100.50.0"))
console.log("Should return [.]100[.]50[.]0: ", defangIPaddr(".100.50.0"))
console.log("Should return [.]100[.]50[.]: ", defangIPaddr(".100.50."))
console.log("Should return [.]100[.][.]50[.]: ", defangIPaddr(".100..50."))

//Good solution
var defangIPaddr = function(a, i = 0) {
    const c = a[i];
    if (c === undefined) {
        return '';
    } 

    if (c === '.') {
        return '[.]' + defangIPaddr(a, i + 1);
    } else {
        return c + defangIPaddr(a, i + 1);
    }
};

//Regex solution