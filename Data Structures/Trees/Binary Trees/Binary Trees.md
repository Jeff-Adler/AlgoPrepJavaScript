Binary Trees

- Tree with max 2 nodes
  - min 0

Binary Search Trees: (BST)

- SORTED binary trees, which facilitates search
- Every node to the left of a parent node is ALWAYS LESS than the parent (no matter how far down the tree)
- Every node to the right of a parent node is ALWAYS MORE

BST Uses:

- makes it very easy to look things up, and to insert

Time Complexity:

- Insertion: O(log n)
- Searching: O(log n)
  - Since you have to increase by log of 2 to add more steps!
    - 2x # of nodes: 1 extra step
    - 4x # of nodes: 2 extra steps
    - 8x # of nodes: 3 extra steps
