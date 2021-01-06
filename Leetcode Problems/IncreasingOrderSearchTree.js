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
var increasingBST = function(root) {
    
    let nodes = []
    
    DFS(root)
    
    function DFS (node) {
        if (!node) return
        
        DFS(node.left)
        nodes.push(node.val)
        DFS(node.right)
    }
        
    let tree = new TreeNode(nodes[0])
    
    let temp = tree
    
    for (let i = 1; i < nodes.length ; i++) {
        node = new TreeNode(nodes[i])
        temp.right = node
        temp = temp.right
    }

    return tree
};