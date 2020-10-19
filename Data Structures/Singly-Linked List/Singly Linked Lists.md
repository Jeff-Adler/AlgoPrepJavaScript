Linked Lists:

- A data structure that contains a head, tail, and length property (of entire list)

- Linked Lists consists of nodes. Each node has a value and a pointer to another node.

- There is no index! To access an element, must start at the beginning

- Main Advantage: Insertion and Deletion is far less expensive

Search:

- Start at beginning and move forward till value is ended

Insert:

- Need to count nodes till you get to the right position
- Inserting into beginning and end is VERY easy!

Lists vs Arrays

Lists:

- No indexes!
- connected via nodes with a Next pointer
- Random access is not allowed (can't just get nth element and get it right away without searching)

Arrays

- indexed in order!
- insertion and deletion can be expensive
- Can quickly be accessed at specific index

Time Complexity:

- Insertion: O(1)
- Removal:
  - O(1) if removing from the beginning
  - O(n) if removing from the end (because you still have to find the element before this.tail)
- Searching: O(n)
- Access: O(n)

LinkedLists really just excel at insertion and removal
