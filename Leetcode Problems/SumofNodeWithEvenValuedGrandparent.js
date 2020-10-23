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

//Problem: Use BFS and keep track of levels 


//Solution 2: store entire nodes in objects with value pointing to entie node. Make teh index correspond to value of head node. For every even numbered index, take e.g. node.left.left,node.left.right...

var sumEvenGrandparent = function(root) {

    //Optimal Solution    
        
        let sum = 0;
        getNumbers(root, 0);
        function getNumbers(node) {
            if (node) {
                if (node.val % 2 === 0) {
                    if (node.left?.left?.val) {
                        sum += node.left.left.val;
                    }
                    if (node.left?.right?.val) {
                        sum += node.left.right.val;
                    }
                    if (node.right?.right?.val) {
                        sum += node.right.right.val;
                    }
                    if (node.right?.left?.val) {
                        sum += node.right.left.val;
                    }
                }
                getNumbers(node.left);
                getNumbers(node.right);
            }
        }
    
    return sum;

    //Amazon onsite requires you do the problem without recursion:
    // let sum = 0
    // getEvenGrandchildren(root)
    // function getEvenGrandchildren(node) {
    //     let queue = [node]
        
    //     while (queue.length) {
    //         let node = queue.shift()
            
    //         if (node.val % 2 === 0) {
    //             if (node.left?.left?.val) {
    //                 sum += node.left.left.val;
    //             }
    //             if (node.left?.right?.val) {
    //                 sum += node.left.right.val;
    //             }
    //             if (node.right?.right?.val) {
    //                 sum += node.right.right.val;
    //             }
    //             if (node.right?.left?.val) {
    //                 sum += node.right.left.val;
    //             }
    //         }
            
    //         if (node.left) queue.push(node.left)
    //         if (node.right) queue.push(node.right)
    //     }
    // }
    
    // return sum
        
    //Solution 2
    // let grandchildren = [];
        
    // getNumbers(root, 0);
    // function getNumbers(node) {
    //     if (node) {
    //         if (node.val % 2 === 0) {
    //             if (node.left?.left?.val) {
    //                 grandchildren.push(node.left.left.val);
    //             }
    //             if (node.left?.right?.val) {
    //                 grandchildren.push(node.left.right.val);
    //             }
    //             if (node.right?.right?.val) {
    //                 grandchildren.push(node.right.right.val);
    //             }
    //             if (node.right?.left?.val) {
    //                 grandchildren.push(node.right.left.val);
    //             }
    //         }
    //         getNumbers(node.left);
    //         getNumbers(node.right);
    //     }
    // }
    
    //     //return 0 if there are no even-valued grandparents
    //     if (!grandchildren.length) return 0
    
    //     //reduce array to single summed value
    //     return grandchildren.reduce((a,b) => {
    //         return (
    //             a+b
    //         )
    //     })
        
    //Solution 3: wont work with very large trees
    //     //declare queue, vals
    //     const vals = {}
    //     let node = root
        
        
    //     //DFS or BFS to retrieve all values of the binary tree
    //     const BFS = (node) => {
    //         let queue = []
    //         queue.push(node)
            
    //         while(queue.length) {
    //             node = queue.shift()
                
    //             //store NODES (not values) into vals according val => node
    //             vals[node.val] = node
            
    //             if (node.left) queue.push(node.left)
    //             if (node.right) queue.push(node.right)
    //         }
    //         return
    //     }
        
    //     //not necessary to write BFS and DFS, but its for practice
    //     const preorder = (node) => {
    //         if (!node) return
            
    //         //store NODES (not values) into vals according val => node
    //         vals[node.val] = node
            
    //         preorder(node.left)
    //         preorder(node.right)
    //     }
        
    //     //calls to BFS or DFS helper methods
    //     preorder(node)
        
    //     //helper method that gets all grandchildren of a node
    //     const getGrandchildren = (node) => {
    //         const grandchildren = []
            
    //         if (node.left) {
    //             if (node.left.left) grandchildren.push(node.left.left.val)
    //             if (node.left.right) grandchildren.push(node.left.right.val)
    //         }
            
    //         if (node.right) {
    //             if (node.right.left) grandchildren.push(node.right.left.val)
    //             if (node.right.right) grandchildren.push(node.right.right.val)
    //         }
            
    //         return grandchildren
    //     }
        
        
    //     //run helper method for all even numbered keys. Store grandchildren in grandchildnren array
    //     let evenChildren = []
    //     for (const nodeVal in vals) {
    //         //if the value of the node is even
    //         if (nodeVal % 2 === 0) {
    //             evenChildren = evenChildren.concat(getGrandchildren(vals[nodeVal]))
    //         }
    //     }
        
    //     //return 0 if there are no even-valued grandparents
    //     if (!evenChildren.length) return 0
        
    //     //reduce array to single summed value
    //     return evenChildren.reduce((a,b) => {
    //         return (
    //             a+b
    //         )
    //     })
        
    };