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

    insert(index,val){
        if (index < 0 || index >= this.length) return false
        if (index === this.length) return !!this.push(val) 
        if (index === 0) return !!this.unshift(val)
       
        let node = new Node(val)
        let preNode = this.get(index - 1)
        let postNode = preNode.next
        preNode.next = node
        node.next = postNode
        this.length++
        return true
    }

    remove(index){
        if (index < 0 || index >= this.length) return false
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        const preNode = this.get(index - 1)
        const removedNode = preNode.next
        preNode.next = preNode.next.next
        this.length--
        return removedNode
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
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
// console.log(list2)
// console.log(list2.set(7,"subpar"))
console.log(list2.insert(1,"rich"))
// console.log(list2)
console.log(list2.insert(0,"Mahogany"))
// console.log(list2)
console.log(list2.remove(2))
console.log(list2.remove(0))
console.log(list2.head)
console.log(list2.reverse())
console.log(list2.head)



