Heaps:

- type of tree

Binary Heaps: binary tree, with special rules. No left/right ordering though (thus 1 could be on right)!!

- Compact as possible: all children of each node are as full as they can be, with left children filled out first
- Min Heap: parent nodes are always smaller than child nodes
- Max Heap: parent nodes are always larger than child nodes

Usage:

- Used to implement Priority Queues, which are VERY COMMON!
- Used for Graph Traversal Algos

Implementing an binary head:

- Array!
  - since heaps are always maximally compact, the placement of a given element on an array within a heapis deterministic (i.e arr[2] is always the R child of the root)
  - for any index of an array n...
    - Left child is stored at 2n + 1
    - Right child is stored at 2n + 2
    - You can also get a parent node from a child!
      - for child at n, parent is at Math.floor((n-1)/2)

Inserting into MaxBinaryHeap:

- insert at end (end = first available child slot working left to right; push into end of array) and percolate up till it's in right place
  - compare value to parent, and swap if necessary (i.e. if child is greater than parent)

Primary Use:

- Priority Queue: Sorting objects by 'priority'
  - insert a new item by priority: heap.insert
  - remove item by priority: heap.extractMax/extarctMin
  - need to use nodes as opposed to simple numeric values

Time Complexity:

- Insertion: O(log n)
- Removal: O(log n)
  - to increase the number of operations to bubble up and bubble down, we have to add 2 ^ n nodes
  - Totally avoids the worst case situation for binary trees, where the tree ends up being a linked list (cause values keep being smaller or higher)
- Search: O(N) -- probably not using a heap to search
  - you can sometimes eliminates parts of tree, if search number is between values of two chlidren, but worst case is O(n).

If your data will come through sorted, you probably don't need to use a binary heap. But, if your data is unsorted, and you need to quickly be able to retrieve and remove max value (as in a priority queue), they're useful
