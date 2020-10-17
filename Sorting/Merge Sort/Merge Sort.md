Merge Sort:

- Combination of merging and sort
- exploits the fact that arrays of 0 or 1 elements are always sorted!
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  - Divide and conquer method!

Continually split arrays in half until you have only single-element arrays. Now merge arrays together, two at a time (that is, in pairs)

So, you then have a bunch of two element arrays that are ALREADY sorted. Now you combine two-element arrays together. So you can make far fewer comparisons to connect [x,y], [a,b] arrays.

Then, combine arrays of 4 elements together, and so forth. The main point is, at every point you sort arrays, most of the elements are already sorted in the subarrays.
