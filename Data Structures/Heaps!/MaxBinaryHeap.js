class MaxBinaryHeap {

    constructor(){
        this.values = []
    }

    getValues() {
        return this.values
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

    //extract root
    //put last value as root
    //Percolate downward till in the right spot
        //swap downward with largest of two children
    extractMax(){
        let extractedVal = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        //Not sure why this step is necessary
        this.values[this.values.length - 1] = extractedVal
        this.values.pop()
        let parentIndex = 0
        let leftChildIndex = parentIndex + 1
        let rightChildIndex = parentIndex + 2
        while (this.values[leftChildIndex] > this.values[parentIndex] || this.values[rightChildIndex] > this.values[parentIndex]) {
            let temp = this.values[parentIndex]
            
            if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
                this.values[parentIndex] = this.values[leftChildIndex]
                this.values[leftChildIndex] = temp
                parentIndex = leftChildIndex
                leftChildIndex = parentIndex + 1
                rightChildIndex = parentIndex + 2
            } else if (this.values[leftChildIndex] < this.values[rightChildIndex]) {
                this.values[parentIndex] = this.values[rightChildIndex]
                this.values[rightChildIndex] = temp
                parentIndex = rightChildIndex
                leftChildIndex = parentIndex + 1
                rightChildIndex = parentIndex + 2
                //in case the children are equal value, or there is no right child
            } else {
                this.values[parentIndex] = this.values[leftChildIndex]
                this.values[leftChildIndex] = temp
                parentIndex = leftChildIndex
                leftChildIndex = parentIndex + 1
                rightChildIndex = parentIndex + 2
            }
        }
        return extractedVal
    } 
}

const heap = new MaxBinaryHeap
heap.insert(3)
heap.insert(4)
heap.insert(7)
heap.insert(9)
heap.insert(5)
heap.insert(13)
heap.insert(10)
heap.insert(15)
heap.insert(2)
// console.log(heap.getValues())
console.log(heap.extractMax())
console.log(heap.getValues())
console.log(heap.extractMax())
console.log(heap.getValues())



