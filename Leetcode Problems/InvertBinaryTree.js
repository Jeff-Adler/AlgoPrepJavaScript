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

//Approach
//1. Get the leftmost i.e. smallest value, and ge the rightmost i.e. largest value. Find every value in between. Add all these values to an array. Remake the tree in an inverted style

//Better way: do a breadth first search to get all the values. save them. remake the tree

var invertTree = function(root) {
    
    function invert(node) {
        if(!node) return;
        
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        invert(node.left);
        invert(node.right);
    }

    invert(root);
    return root;
    
};