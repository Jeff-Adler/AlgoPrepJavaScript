/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//Restatement: You are given a BST as input. Write a function that returns tree with the same structure as input, but where the value of every node equals the sum of the original key plus sum of all keys greater than original keys.

//Examples: 
//root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] --> [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

//Approach:
//Get all values from BST, be it through DFS or BFS. Sort the values. Then, for every node in original BST, add every value that is  greater than it in that sorted array

var bstToGst = function(root) {
    let node = root
    let vals = []
    DFS(node)
    
    function DFS(node) {
        if (!node) return
        
        vals.push(node.val)
        
        DFS(node.left)
        DFS(node.right)
    }
    
    vals.sort((a,b) => {return a - b})
    
    node = root
    convert(node)
    
    function convert(node) {
        //gets all values greater than and equal to node.val, sums them, and sets node.val to the result
        if (node) node.val = vals.slice(vals.indexOf(node.val)).reduce((a,b) => {return a + b})
        else return
        
        convert(node.left)
        convert(node.right)
    }
    
    return root
};