/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

//Solution: Inorder Search preserves the order of the tree

var getTargetCopy = function(original, cloned, target) {
    const arr = []
    let node = cloned
    
    function preorder (node) {
        if (!node) return
        
        arr.push(node)
        if (node.val === target.val) return 
        preorder(node.left)
        preorder(node.right)
    }
    
    preorder(node)

    return arr.find((element) => {
        return (
            element.val === target.val
        )
    })
};