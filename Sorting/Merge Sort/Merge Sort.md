Merge Sort:

- Combination of merging and sort
- exploits the fact that arrays of 0 or 1 elements are always sorted!
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  - Divide and conquer method!

Continually split arrays in half until you have only single-element arrays. Now merge arrays together, two at a time (that is, in pairs)

So, you then have a bunch of two element arrays that are ALREADY sorted. Now you combine two-element arrays together. So you can make far fewer comparisons to connect [x,y], [a,b] arrays.

Then, combine arrays of 4 elements together, and so forth. The main point is, at every point you sort arrays, most of the elements are already sorted in the subarrays.

Time Complexity:

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)
- Space: O(n)

Why O(N log n):

- n = number of comparisons
- log n = number of 'splits'

- why multiplication (of n and log n): for every split, you have that many comparisons

32
16 16
8 8 8 8
4 4 4 4 4 4 4 4
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

- 32(n) total one,element arrays. 5 (log n) splits to get there
