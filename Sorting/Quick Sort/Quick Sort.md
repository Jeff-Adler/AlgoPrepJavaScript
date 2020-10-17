Like Merge Sort: exploits the fact that arrays of 0 or 1 elements are always sorted

- Time Complexity: O(N log n) (best and average)
  - Worst Case: O(n^2)
  - O(log n) decompositions \* O(N) operations per decomposition

Worst Case: Pivot chosen is minimum or maximum value every time. - To help avoid worst cast: pick a pivot randomly for every decomposition, or always pick the middle value. Can't quite quarantee it though

Pivot/Partition:
