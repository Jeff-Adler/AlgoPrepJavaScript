Doubly Linked Lists:

Just like singly linked lists but with pointers in both directions

Items at end of list point to null on the empty side

Advantages over singly-linked lists:

- Much easier to remove from the end of the list. Just pop the tail, and update tail.prev.

  - In single list, you have to start from the beginning to get the node before the tail

- Very difficult in single to move backwards in the list, if you ever have to

- generally more flexible than singly linked list

Disadvantages:

- code is ma bit more complicated

- More memory is used up!
