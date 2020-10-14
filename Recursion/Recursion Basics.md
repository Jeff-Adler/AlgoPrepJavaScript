Recursion

Definition: A process (or function) that calls itself

Why is it important?:

- Used everywhere:
  - JSON.parse/JSON.stringify are often recursive.
  - document.getElementById and DOM traversal as well
  - Object traversal
  - common with complex data structures

How is it used:

Two essential components of a recursive function:

Call Stack:

- STACK data structure
- when function is invoked it is placed (pushed) on top of the call stack
- When JS sees the return keyword, or when function ends, the compiler will remove(pop)
- can follow a call stack in Chrome Dev Tools

Help method recursion vs. pure recursion

How they work:

2 Components:

- Base Case: Condition when the recursion ends
- Different Input: Every time recursive function is called, the input must be modified in some way
