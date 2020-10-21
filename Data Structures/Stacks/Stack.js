//Linked List Stack Implementation
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

//Cannot re-use push/pop from linked list implementation, as they were O(n) time, and we want O(1) 
//Instead, we will use shift/unshift from linked list, but call it push/pop
class Stack {
    constructor(){
        //Stack nomenclature
        this.first=null
        this.last=null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }

    pop(){
        if (this.size === 0) return null
        const removedNode = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else{
            this.first = removedNode.next
        }
        removedNode.next = null
        this.size--
        return removedNode.val
    }
}

const stack = new Stack
stack.push(1)
stack.push(2)
stack.push(3)
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack)
