Radix Sort:

- NOT a comparison sorter, in the sense of two items being compared at some point
- Never directly compare two elements
- Works on numbers
- Often used on binary (so you could convert strings to binary then sort them)
- **Exploits the fact that info about the size of a number is encoded in a the number of digits!!**
  - more digits ALWAYS means bigger number

How it works:

- create a bucket for every possible value of a digit (i.e. 0 - 9)
- put numbers into buckets based on first digit
- order numbers by those buckets
- repeat now for values based on the second digit from the right
  - if number has no digit in that position, put in the zero bucket
- number of times process is repeated = number of digits of largest number in the data
- no two numbers are ever compared. They are thrown into buckets, and ordered however they were thrown in.

Helper Methods

- getDigit(num,place): returns digit in num at given place value (in other words, return what value is stored in a given data)

Time Complexity: where k is # of digits...

- Best: O(nk)
- Average: O(nk)
- Worst: O(nk)
  - so number of digits can really affect runtime
  - Controversy:
    - Apparently there is some argument that, based on how bits are stored in memory, then O(nk) actually becomes O(n log n)
    - Counter argument: well, actually comparison sort has shortcomings to about memory
- Basically, Radix Sort can be faster comparison sort IF k is sufficiently small
- Also just fairly easy to understand

Space Complexity:
O(n + k)
