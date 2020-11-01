Dynamic Programming:

When can you use it?
You need:

- Overlapping Subproblems: A problem can be broken down into subproblems which are reused EXACTLY several times

  - Fibonacci Sequence: true overlapping subproblems. Same numbers are added many times.
  - MergeSort: NON-overlapping subproblem, because different pieces are sorted every time in each pass
    - Special MergeSort case with overlapping subproblems: mergeSort([10,24,10,24])

- Optimal Substructure: A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
  - Shortest Path: Shortest point from A to D will consist of shortest point from A to C, from A to B, etc.
    - NON optimal: Longest simple (as in, non-repeating) path: since longest simple paths wont be constructed by longest path from other nodes
    - Cheapest flight from two locations: NOT optimal substructure. Cause if cheapest flight from A to C might be A to B to C, it could still be the case that shortest path from A to B would be A TO D to B. (in other words, the weird quirks of ticket pricing make it non-optimal)

Normal runtime for recursive Fibonacci Sequence solution: O(2^N)!!

- The main problem: we have to repeat many many operations. I.e. to get f(5), we do f(3) multiple times.

Memoization: Storing the results of expensive function calls and returning the cached result when the same inputs occur again

Time Complexity: VASTLY improves time complexity

Top-down vs Bottom-up DP:

- Top-down: Start with Fib(7) and move down
- Bottom-up: "tabulation"
  - uses iteration, not recursion
  - has better space complexity
