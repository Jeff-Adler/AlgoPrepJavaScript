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
 * @param {number} k
 * @return {number}
 */

//Problem: You are given an BST. You are given a value k >= 1, ,+ BST's total elements. You must write a function that finds the kth smallest element. if k = 1, find the smallest element, k = 5,5th smallest

//Approach: return output of DFSPreOrder [k - 1]

//Optimization: stop the search once the kth smallest element has been found

var kthSmallest = function(root, k) {
    const vals = []
    let node = root
    
    function inorder (node) {
        //Optimization to avoid searching the entire tree:
        if (vals.length >= k) return
        
        if (node.left) inorder(node.left)
        vals.push(node.val)
        if (node.right) inorder(node.right)
    }
    
    inorder(node)
    return vals[k-1]
};