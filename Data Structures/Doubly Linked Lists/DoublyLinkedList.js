class Node {
    constructor (val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        const newNode = new Node (val)
        //could also do if (length === 0) {}
        if (this.head === null && this.tail === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return list
    }

    pop(){
        if (this.length === 0) return undefined
        const removedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
            removedNode.prev = null
        }
        this.length--
        return removedNode
    }
}

let list = new DoublyLinkedList
list.push("Welcome")
// console.log(list)
list.push("Home")
// console.log(list)
list.push("Dog")
list.pop()
// console.log(list)
// list.pop()
// list.pop()
console.log(list)

