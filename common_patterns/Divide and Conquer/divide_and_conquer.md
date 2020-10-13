Divide and Counter:
This involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can TREMENDOUSLY decrease time complexity

Use cases:

- Binary Search: given a a sorted array of integers and a value, return the index where the value passed to the function is located. If not found, return -1
  - O(Log(N))
    - Solution: Start in the middle of the array. If value at middle is smaller than desired value, divide array by half and go to right half. If smaller, left half Divide in middle and do the same.
