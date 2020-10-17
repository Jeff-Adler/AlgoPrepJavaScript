JavaScript sort() function:

- default order adheres to unicode points
  - only works as intended (usually) for strings being sorted alphabetically
- accepts comparator function:
  - comparator must return a pos/neg number or 0
  - comparator looks at pairs of elements, determines their sort order based on the return value.
    - if it returns a negative number, a should come before b
    - if it returns a positive number, a should come after b
    - if it returns -, a and b are the same as far as sorting is concerned

Bubble vs. Selection vs. Insertion

- Often preferred for smaller datasets

- basically all quadratic
  - bubble & insertion: best case O(N), otherwise all O(n^2)
  - selection sort even is O(n^2) when array is nearly sorted, cause it still checks till the end for smaller values

Bubble: iteratively percolates highest value to the top, through successive loops and nested swaps

- good with semi-sorted data

Selection: iteratively finds smallest value in array, and moves to the left

- sucks

Insertion: finds a value, inserts into the right place

- good at live streaming data
- good with semi-sorted data

Main limitations of standard sort algorithms:

- Do not scale with larger data sets

Intermediate Sorting Algorithms:

- Can improve time complexity from O(n^2) to O(n log n), which is significantly better than quadratic, even if worse than O(N)
- much less simple than the quadratic algorithms
- not intuitive to humans

Merge Sort:

Quick Sort

Radix Sort

\*\*BubbleSort and Insertion Sort are actually FASTER than MergeSort and such, when array is nearly sorted. They are better than just equivalent
