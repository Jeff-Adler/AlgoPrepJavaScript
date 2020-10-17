/**
 * @param {string} s
 * @return {number}
 */

//Problem: A guarenteed VPS is given as input. Count how many layers of nesting there are in the VPS. "" is 0, "()" is 1, "()()" is 1, "(())" is 2,etc

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

    // It is an empty string "", or a single character not equal to "(" or ")",
    // It can be written as AB (A concatenated with B), where A and B are VPS's, or
    // It can be written as (A), where A is a VPS.

// We can similarly define the nesting depth depth(S) of any VPS S as follows:
    // depth("") = 0
    // depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
    // depth("(" + A + ")") = 1 + depth(A), where A is a VPS.

//Approach: (Non-recursive) Declare counter. Declare tempMax Iterate through string. For every "(" encountered, increment counter. For every ), decrement counter. Whenever counter === 0, check if counter value is higher than  maxTemp. If so, set maxTemp equal to counter
    //O(n)

//Minor Optimization: use a regex expression to eliminate all characters but "(" and ")," if thats possible

//Other Approach: Use recursion and count nesting.I guess you iterate through the string, and every time you hit an open paren, you call the function. 
    //base case: string = ""
    //challenge: not sure where to start the split. Easier if you remove all 
    //extraneous characters


    var maxDepth = function(s) {
    
        let counter = 0
        let tempMax = 0
        
        for (const character of s) {
            if (character === "(") counter++
            else if (character === ")") counter--
            if (counter > tempMax) tempMax = counter
        }
        
        return tempMax  
    };
    
    
    //Sample Outputs:
    console.log("Should return 3: ", maxDepth("(1+(2*3)+((8)/4))+1"))
    console.log("Should return 3: ", maxDepth("(1)+((2))+(((3)))"))
    console.log("Should return 1: ", maxDepth("1+(2*3)/(2-1)"))
    console.log("Should return 0: ", maxDepth("1"))
    console.log("Should return 3: ", maxDepth("( () ( ( ) ) )"))
    console.log("Should return 3: ", maxDepth("( () ( ( ) ) ( ( ) ) )"))
    console.log("Should return 4: ", maxDepth("( () ( ( ) ) ( ( () ) ) )"))