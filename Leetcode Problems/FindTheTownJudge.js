/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

//Restatement: A town has N people labelled from 1 to N. One of these people MAY be the town judge. If town judge exists:
    // Town judge trusts nobody
    // everybody except judge trusts the judge
    // exactly one person satisfies these conditions.
//In other words, see if there is one person who everyone trusts, but who trusts no one
//Trust is represented by array of pairs [a,b], where a trusts b
//Task: If town judge exists, give their identity. otherwise, return -1

//Examples:
// Input: N = 2, trust = [[1,2]]
// Output: 2

// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3

// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// Input: N = 3, trust = [[1,2],[2,3]]
// Output: -1

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

//Approach: 
//1. Use object. Have a key for every person encounted (truster or trustee). Have value be everyone they trust. Find someone who points to empty array. Check if that person is found in the value for every other key in the object

var findJudge = function(N, trust) {
    //have no idea why this is the case
    if (N === 1 && !trust.length) return 1
    if (N === 2 && !trust.length) return -1

    //Declare trust tracker object
    const trustTracker = {}
    
    //Loop through trust array
    for (let i = 0 ; i < trust.length ; i++){
        
    //for every pair, add keys for truster and trustee (if they don't already exist). Put trustee in value of truster key 
        if (!trustTracker[trust[i][0]]) trustTracker[trust[i][0]] = []
        if (!trustTracker[trust[i][1]]) trustTracker[trust[i][1]] = []
        trustTracker[trust[i][0]].push(trust[i][1])
    }
    
    //Find key that points to empty array.
    let judge
    for (const key in trustTracker) {
        if (!trustTracker[key].length) {
            judge = key
            break
        }
    }
        
    //See if that key is found in values for every other key
    
    //return if so, return -1 if not
    
    for (const key in trustTracker) {
        if (key !== judge) {
            if (!trustTracker[key].includes(parseInt(judge))) {
                return -1
            }
        }
    }
    
    return judge  
};
