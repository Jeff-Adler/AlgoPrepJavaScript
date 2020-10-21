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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//You are given a root of a BST, as well as a left min and a right max. Write a function that sums up all hte values between these values (and including them) on the tree

//Solution: Traverse the tree twice, finding L and R. For every node passed, add it to an array. Since the array has no duplicates, any duplicates in the array represent hitting the same node twice. So, sum up everything but the duplicates.
//Problem: this wont count any nodes BELOW L and R, that might be between L and R
//Alternative: run find for every single value between L and R, inclusive. If found, add to the sum

//Optimize: record any values seen. if any that have been seen have been recored, skip that iteration of the loop

//Much better: Use DFS

var rangeSumBST = function(root, L, R) {
    let sum = 0
    const seenValues = {}
         
    const contains = (val) => {
        let current = root
        if (current.val === val) {
            seenValues[current.val] = 1
            return true
        }
        while (current.val !== val){
            seenValues[current.val] = 1
            if (current.val > val){
                if (current.left) {
                    current = current.left
                } else {
                    return false
                }
            } else if (current.val < val) {
                if (current.right) {
                    current = current.right
                } else {
                    return false
                }
            }
        }  
        return true
    }

    while (L <= R ) {
        if(seenValues[L]) {
            sum += L
        } else {
            console.log(L)
            if (contains(L)){sum += L}
        }
        L++
    }
    
    return sum
};