/**
 * @param {string[][]} paths
 * @return {string}
 */

//Restatement: You are given an array, paths. Every given element in paths has two cities that have a connection (in other words, two vertrics). The graph of paths is guarenteed to not form a loop. Therefore, the job is to find the 'destination' city, that which has no outgoing path

//Examples: paths = [["B","C"],["D","B"],["C","A"]] => "A"
// path: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]] => "Sao Paulo"
//paths = [["A","Z"]] => "Z" 

//Approach:
//1. Perform a BFS through the graph. In addition to adding neighbors to a queue, however, add the vertex as key to an object, with neighbors as values. Return the neighbor with no values

var destCity = function(paths) {
    //declare neighbor tracker
    let neighbors = {}
    for (let i = 0 ; i < paths.length ; i++) {
        //For every element, save the vertex as a key with neighbors as values
        neighbors[paths[i][0]] ? neighbors[paths[i][0]].push([paths[i][1]]) : neighbors[paths[i][0]] = [paths[i][1]]
        if (!neighbors[paths[i][1]]) neighbors[paths[i][1]] = []
    }
    
//Find and returnthe key with no value
    for (const key in neighbors) {
        if (!neighbors[key].length) return key
    }
};