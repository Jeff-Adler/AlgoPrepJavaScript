class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
 
class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        let current
        if (!this.root) {
            this.root = newNode
        } else {
                current = this.root
                while (current !== newNode){
                    if(current.val < newNode.val){
                        if (current.right) {
                            current = current.right
                        } else {
                        current.right = newNode
                        current = newNode
                    }
                } else if (current.val > newNode.val) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = newNode
                        current = newNode
                    }
                } else {
                    //to catch duplicates. Could also add frequency counter to node class to track duplicates
                    return undefined
                }
            }
        }
        return this
    }

    find(val){
        if (this.root === null) return false
        if (this.root.val === val) return this.root
        let current = this.root
        while (current.val !== val) {
            if (current.val > val) {
                if (current.left) {
                    current = current.left
                } else {
                    return undefined
                }
            } else if (current.val < val) {
                if (current.right) {
                    current = current.right
                } else {
                    return undefined
                }
            } 
        }
        return current
    }

    contains(val){
        if (this.root === null) return false
        if (this.root.val === val) return true
        let current = this.root
        while (current.val !== val) {
            if (current.val > val) {
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
}

const bst = new BinarySearchTree
bst.insert(1)
bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(4)
// console.log(bst.find(2))
// console.log(bst.find(5))
// console.log(bst.find(3))
// console.log(bst.find(4))
// console.log(bst.find(1))
// console.log(bst.find(6))
