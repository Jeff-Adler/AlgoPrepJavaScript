/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let totalSpaces = 0
    for (let i = 0 ; i < text.length ; i++) {
        if (text[i] === " ") totalSpaces++
    }
    
    let words = text.split(" ")
    words = words.filter((char) => {return char !== ""})
    if (words.length > 1){
        let spaceCount = Math.floor(totalSpaces / (words.length - 1))

        let spaceStr = ""

        while (spaceCount > 0) {
            spaceStr += " "
            spaceCount--
        }

        let maximizedStr = words.join(spaceStr)

        if (totalSpaces % (words.length - 1) !== 0) {
            let extraSpaceCount = totalSpaces % (words.length - 1)
            let extraSpaceStr = ""

            while (extraSpaceCount > 0) {
                extraSpaceStr += " "
                extraSpaceCount--
            }

            maximizedStr += extraSpaceStr
        }

        return maximizedStr
    } else {
        let maximizedStr = text.trim()
        while (totalSpaces > 0) {
            maximizedStr += " "
            totalSpaces--
        }

        return maximizedStr
    }
};