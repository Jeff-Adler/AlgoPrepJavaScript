Given any tree (not necessarily sorted), how do we visit every node in a tree?

- Breadth-first Search (BFS): work horizontal, across layers, from the top (especially appropriate for potentially wider, non-binary trees)
  - Takes advantage of queues
  - Process: (iterative) Essentially, it's using a queue to keep track of which nodes have children that you havent check yet. You dont move on to the next level of nodes till you've dequeued the higher row
    - Create a queue (often just with an array), and array, visited, to store nodes
    - Put root in queue
    - Loop as long as any value is in the queue
      - Dequeue node from queue and push value of node into visited
      - if there is left property on the last dequeued node, put it in the queue
      - if there is right property, put it in the queue
    - Return visited
- Depth-first Search (DFS): 3 steps for all implenetations: 1. Visit/record current node, 2. Explore entire left side, 3 Explore entire right side
  - InOrder
  - Preorder: start from top, traverse the entire left, then entire right. And, this applies for EVERY node. So it means youll trickle down the bottom and not go to the right side of any nodes till the left side has been fully explored.
  - Postorder: start from bottom left, work our way to the top

When to use BFS vs DFS:

- Same time complexity!

- but, Space Complexity differs:

  - Even if binary, a large, fully fleshed out tree, will get very very wide by e.g. the 6 layer. Thus **BFS will require a more memory than DFS, since youll hold many values in the queue**

DFS:

- better for large, fleshed out tree, to save memory (although time complexity is the same)

PreOrder vs PostOrder vs InOrder:

- PreOrder: useful when you want to preserve/export/flattern the tree structure, since it returns the order that will create the same tree
- InOrder: returns values for a BST from smallest to highest! So if you want values to be ordered, inorder is nice. (maybe good to store to DB?)
  - DOes not preserve the root though, so not good if you need to recreate the tree
