Linear search on arrays:
if list is unsorted, this is best option

Time Complexity: O(n) (best: O(1), worst: O(n), average: O(n))

- indexOf
- includes
- find
- findIndex

Binary search on sorted array:
find entry at midpoint of SORTED array, if target is less than entry, take first half of array. if target is more than entry,
take second half of array. Repeat this recursively

Time Complexity: O(log n)

- Average/Worst case: O(log n)
- Best case: O(1)
  Crucial point: for an array of 16 elements, it will take 4 steps to find that the value is never found (which is the worst case). To get to 5 steps, we'd have to DOUBLE the size of our array, to 32

Psuedocode:

- Function accepts a sorted array and a value.
- Create left pointer at the start of the array, and a right pointer at the end
- While the left pointer comes before right pointer
  - Create pointer in the middle
  - if you find value you want, return index
  - if value is too small, move left pointer up
  - if value is too large, move right pointer down
- If you never find value, return -1

- Divide and conquer!
- eliminate half of the remaining elements at a time
- must be sorted

Naive string searching algorithm

KMP string searching algorithm
