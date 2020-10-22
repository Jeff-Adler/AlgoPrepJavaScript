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

//Approach: Use BFS, but keep track of levels

var deepestLeavesSum = function(root) {
    const queue = []
    let levels = [[]]
    let level = 0
    
    let node = root
    queue.push(node)
    while (queue.length) {

        let levelSize = queue.length
        while (levelSize > 0) {
            node = queue.shift()
            levels[level].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            levelSize--
        }
        level++
        if (queue.length) levels.push([])
    }
    return levels[levels.length-1].reduce((a,b) => {return a + b})
};
