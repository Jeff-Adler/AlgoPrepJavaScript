/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */

 //Alternative Solution: Use object, not array, to store permutations

var processQueries = function(queries, m) {
    //cant use new Array(m) with map()
    let perm = [...Array(m)].map((element,index) => {
        return (index + 1)
    })  
    const positions = []
    for (const element of queries) {
        const queryPos = perm.indexOf(element)
        positions.push(queryPos)
        if (queryPos !== (perm.length - 1)){
            //use splice + unshift not slice, so you just remove/add one element
            perm = [].concat(element, perm.slice(0,queryPos), perm.slice(queryPos + 1))
        } else {
            perm = [].concat(element,perm.slice(0,queryPos))
        }
    }
    return positions

};