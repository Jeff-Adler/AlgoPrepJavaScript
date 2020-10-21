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
                }
            }
        }
        return this
    }
}

const bst = new BinarySearchTree
// bst.insert(1)
// bst.insert(5)
// bst.insert(3)
// bst.insert(2)
// bst.insert(4)
console.log(bst.insert(2))
console.log(bst.insert(5))
console.log(bst.insert(3))
console.log(bst.insert(4))
console.log(bst.insert(1))