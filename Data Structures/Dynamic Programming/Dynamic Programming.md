Dynamic Programming:

When can you use it?
You need:

- Overlapping Subproblems: A problem can be broken down into subproblems which are reused several times
  - Fibonacci Sequence: true overlapping subproblems. Same numbers are added many times
  - MergeSort: NON-overlapping subproblem, because different pieces are sorted every time in each pass
    - Special MergeSort case with overlapping subproblems: mergeSort([10,24,10,24])
