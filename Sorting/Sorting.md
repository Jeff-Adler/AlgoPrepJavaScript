JavaScript sort() function:

- default order adheres to unicode points
  - only works as intended (usually) for strings being sorted alphabetically
- accepts comparator function:
  - comparator looks at pairs of elements, determines their sort order based on the return value.
    - if it returns a negative number, a should come before b
