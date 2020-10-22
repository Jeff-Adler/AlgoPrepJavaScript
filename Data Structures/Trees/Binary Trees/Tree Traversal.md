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
