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
 * @return {number[]}
 */

var postorderTraversal = function(root) {
    const nodes = []
    
    function postorder(node) {
        if (!node) return
        
        postorder(node.left)
        postorder(node.right)
        
        nodes.push(node.val)
    }
        
    postorder(root)
    return nodes
};