class MaxBinaryHeap {

    constructor(){
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        if (this.values.length === 1) return this.values

        let childIndex = this.values.length - 1
        let parentIndex = Math.floor((childIndex - 1)/2)
        while (this.values[childIndex] > this.values[parentIndex]) {
            let temp = this.values[childIndex]
            this.values[childIndex] = this.values[parentIndex]
            this.values[parentIndex] = temp
            childIndex = parentIndex
            parentIndex = Math.floor((childIndex - 1)/2)
        }
        return this.values
    }    
}

const heap = new MaxBinaryHeap
heap.insert(3)
heap.insert(4)
heap.insert(7)
console.log(heap.insert(9))
console.log(heap.insert(5))