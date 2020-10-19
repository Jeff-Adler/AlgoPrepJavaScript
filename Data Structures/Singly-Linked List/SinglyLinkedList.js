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
        pointer.next = null
        this.length--
        return this
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Dear")
console.log(list)
console.log(list.pop())
console.log(list.pop())