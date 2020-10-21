Stacks:

LIFO: Last in, first out

- like the call stack in recursion

Where Stacks are used:

- managing function invocations
- Undo/Redo (in editors)
- Routing/Navigators, such as in React, are treated like a stack
- used in algos for trees and graphs

Many Implementations -- Stack is just a concept:

- array implementations
  - Push/Pop or Shift/Unshift. Obviously, push/pop is preferred, as its more efficient
  - arrays in general are overkill for stacks though, and a linked list is more efficient, and totally satisfactor
- Some langs have built-in stack datatype. JS does not
- Basic JS Stack: use a linkedlist
