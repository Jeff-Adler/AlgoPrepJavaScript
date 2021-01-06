/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

    function filterVowels (s) {
        return s.filter((char) => {
            return (
                char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' 
            )
        })
    }
    
    const s1Vowels = filterVowels(s.substring(0,s.length/2).toLowerCase().split(""))
    const s2Vowels = filterVowels(s.substring(s.length/2).toLowerCase().split(""))
    return s1Vowels.length === s2Vowels.length
};