Bubble Sort:

- Not that efficient

- Not that common

- ONE good used case

- Compare first two values, swap if value 1 is higher than value 2. Continue swapping iteratively until highest value has 'bubbled' to the top. Then go back to the beginning until second highest value has 'bubbled' to the top, and so forth

Psuedocode: (assume array of numbers)

- Start looping with variable called i from end of array towards the beginning
  - shrinks space
- start inner loop with variable called from beginning until i - 1
- if arr[j] is greater than [arr[j+1],swap those two values

Optimization:

- (for a nearly-sorted array,) short circuit the function once array is fully sorted, even if it hasnt finished looping through the (already-sorted) array
  - implementation:if, at the last iteration through the array, no swaps were made, end the loop
