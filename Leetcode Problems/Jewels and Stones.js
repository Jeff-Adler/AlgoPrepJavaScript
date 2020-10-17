/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//J is a legend for which stone types are jewels 
//J is case-sensitive
//All characters in J are distinct
//s is a single string, where each character represents a stone you have
//You can have multiple jewels of the same type
//Given J,S, return the number of jewels you have

//edge cases: can we assume S and J only consist of letters?

//Approach: Loop through J. Declare counter. For every letter in J, loop through S. If character in S matches character in J, incremet counter. After outer loop terminates, return counter.
    //Time complexity: O(N^2)

//Minor Optimization: Delete letter from S after it has been matched
    //Time complexity: Reduced O(N^2)

//Major Optimization: Loop through S. Record the instance of every character in the string with an object. Key will be the character in S, value will be the number of times it appears. Once the loop is finished, declare Counter Then, loop through J. For every character in J, augment counter by the value associated with key.
    //Time complexity: O(N)

    var numJewelsInStones = function(J, S) {
        const frequencyCounter = {}
        for (const character of S) {
            (frequencyCounter[character]) ? ++frequencyCounter[character] : frequencyCounter[character] = 1
        }
        let counter = 0
        for (const character of J) {
            if (frequencyCounter[character]) counter += frequencyCounter[character]
        }
        return counter
    };
    
    //Sample Inputs:
    console.log("Should return 3: ", numJewelsInStones("aA","aAAbbbb"))
    console.log("Should return 0: ", numJewelsInStones("z","ZZ"))
    console.log("Should return 7: ", numJewelsInStones("aA","aAAbbbbaxxAAra"))
    console.log("Should return 4: ", numJewelsInStones("A","aAAbbbbaxxAAra"))
    console.log("Should return 3: ", numJewelsInStones("A","AAA"))