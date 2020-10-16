JavaScript sort() function:

- default order adheres to unicode points
  - only works as intended (usually) for strings being sorted alphabetically
- accepts comparator function:
  - comparator must return a pos/neg number or 0
  - comparator looks at pairs of elements, determines their sort order based on the return value.
    - if it returns a negative number, a should come before b
    - if it returns a positive number, a should come after b
    - if it returns -, a and b are the same as far as sorting is concerned
