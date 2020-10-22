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
 * @return {number}
 */

//Problem: You are given a BT with the following properties: every node can have exactly two or zero nodes. The children nodes are not necessarily ordered. The tree can have duplicates. However, for any parent node, the node's value is the smaller among its two child nodes. The task: build a function that outputs the second smallest value in the whole tree. If no such value exists return -1

//Approach: run an InOrder search but stop the recurring after two passes
    //O(1)
//Probem: doesn't account for duplicates
//Solution 1: find first unique character after first unique character in an array

//Solution 2: stop recurring after val !== val



var findSecondMinimumValue = function(root) {
    const vals = []
    let node = root
    
    function inorder (node) {
        if (node.left) inorder(node.left)
        vals.push(node.val)
        if (node.right) inorder(node.right)         
    }
    
    inorder(node)
    vals.sort((a,b) => a - b)
    if (vals[0] === vals[vals.length - 1]) return -1
    let i = 0
    let j = 1
    while (vals[i] === vals[j]) {
        i++
        j++
    }
    return vals[j]
};