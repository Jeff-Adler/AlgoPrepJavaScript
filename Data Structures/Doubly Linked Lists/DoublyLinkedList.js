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
        return this
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

    shift(){
        if (this.length === 0) return undefined
        let oldHead = this.head 
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null 
        }
        this.length--
        return oldHead
    }

    unshift(val){
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        length++
        return this
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
list.shift()
list.unshift("Welcome")
console.log(list)

