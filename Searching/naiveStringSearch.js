//return the number of times substring is found in string

const naiveStringSearch = (str,substr) => {
    let counter = 0

    function helper(strHelper,substrHelper){

        if (strHelper.length === 0) return 0

        if (strHelper[0] === substrHelper[0]) {
            let bool = true
            for (let i = 0 ; i < substrHelper.length ; i++) {
                if (substrHelper[i] !== strHelper[i]) {
                    bool = false
                }
            }
            if (bool) counter++
        } 

        return helper(strHelper.slice(1),substrHelper)
    }

    helper(str,substr)

    return counter
}

console.log("Should return 1: " , naiveStringSearch("jeff","j"))
console.log("Should return 2: " , naiveStringSearch("jeff","f"))
console.log("Should return 2: " , naiveStringSearch("jefef","f"))
console.log("Should return 0: " , naiveStringSearch("jefef","p"))
console.log("Should return 1: " , naiveStringSearch("abcxxjeffx","jeff"))
console.log("Should return 2: " , naiveStringSearch("jeffxxjeffx","jeff"))
console.log("Should return 1: " , naiveStringSearch("abcxxjjjjjjeffx","jeff"))

