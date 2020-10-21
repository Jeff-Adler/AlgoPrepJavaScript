class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

//We will add to the end (tail), and remove from beginning.
class Queue {
    constructor () {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        const newNode = new Node (val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue(){
        if (this.size === 0) return null
        const removedNode = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--
        removedNode.next = null
        return removedNode.val
    }
}

const queue = new Queue 
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
// console.log(queue)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())