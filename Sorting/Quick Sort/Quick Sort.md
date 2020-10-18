Like Merge Sort: exploits the fact that arrays of 0 or 1 elements are always sorted

- Time Complexity: O(N log n) (best and average)
  - Worst Case: O(n^2)
  - O(log n) decompositions \* O(N) operations per decomposition

Worst Case: Pivot chosen is minimum or maximum value every time. - To help avoid worst cast: pick a pivot randomly for every decomposition, or always pick the middle value. Can't quite quarantee it though

Pivot/Partition:

- You pick a pivot basically arbitrarily
  - Always pick first element, last element, middle element, etc.
  - if you can estimate where a median value would be, pick that
- you then iterate through the array, moving values less than pivot to the left edge (without sorting them)
  - this will naturally put numbers greater than the pivot, to the right end
  - to do this, you swap the smaller number with the first bigger number starting from the left edge
- Having kept track of how many smaller elements than the pivot there are, you, at the end, swap the pivot with the right-most smaller element
