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
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return null
        let currentNode
        if (index <= Math.floor(this.length/2)) {
            currentNode = this.head
            for (let i = 0 ; i < index ; i++) {
                currentNode = currentNode.next
            }
        } else {
            currentNode = this.tail
            for (let i = this.length - 1 ; i > index ; i--) {
                currentNode = currentNode.prev
            }
        }
        return currentNode
    }

    set(index,val){
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index,val){
        if (index < 0 || index >= this.length) return null
        if (index === 0) this.unshift(val)
        if (index === this.length - 1) this.push(val)
        let postNode = this.get(index)
        let preNode = postNode.prev
        let newNode = new Node(val)
        preNode.next = newNode
        postNode.prev = newNode
        newNode.prev = preNode
        newNode.next = postNode
        this.length++
        return true
    }

    remove(index){
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) this.shift
        if (index === this.length - 1) this.pop
        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.prev = null
        removedNode.next = null
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
list.shift()
list.unshift("Welcome")
list.push("Home")
list.push("Dog")
// console.log(list)
// console.log(list.get(0))
// console.log(list.get(1))
// console.log(list.get(2))
// console.log(list.get(3))
// console.log(list.get(4))
// console.log(list)
list.set(2,"Mr.")
// console.log(list.get(2))
list.insert(2, "sir")
// console.log(list.get(2))
list.remove(3)
// console.log(list.get(3))