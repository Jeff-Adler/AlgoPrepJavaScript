class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//rudimentary way to create linked list without actual linked list class
// var first = new Node("Hi")
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        const node = new Node(val)
        this.head ? this.tail.next = node : this.head = node
        this.tail = node
        this.length++
        return this
    }

    pop(){
        if (this.length === 0) return undefined
        let pointer = this.head
        while (pointer.next !== this.tail) {
            pointer = pointer.next
        }
        this.tail = pointer
        const removedNode = pointer.next
        pointer.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return removedNode
    }

    shift(){
        if (this.length === 0) return undefined
        const removedHead = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return removedHead
    }

    unshift(val){
        const node = new Node(val)
        node.next = this.head
        this.head = node
        if (this.length === 0) this.tail = node
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return null
        let counter = index
        let pointer = this.head
        while (counter > 0) {
            pointer = pointer.next
            counter--
        }
        return pointer
    }

    set(index,val){
        let node = this.get(index)
        if (node) {
            node.val = val
            return  true
        } else {
            return false
        }
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
// list.push("Dear")
// console.log(list)
// console.log(list.unshift("Ah, "))
var list2 = new SinglyLinkedList()
console.log(list2.unshift("Cream"))
console.log(list2.unshift("Whipped"))
console.log(list2.unshift("Delicious"))
console.log(list2.set(0,"subpar"))
console.log(list2)
console.log(list2.set(7,"subpar"))


