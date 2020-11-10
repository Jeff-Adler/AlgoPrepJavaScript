/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const vals = []
    
    DFS(root1)
    DFS(root2)
    
    function DFS (node) {
        if (!node) return
        
        vals.push(node.val) 
        DFS(node.left)
        DFS(node.right)
    }
    
    return vals.sort((a,b) => {return a - b})
};