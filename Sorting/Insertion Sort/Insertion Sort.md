Insertion Sort: Gradually insert items into the right place in an array, one at a time

Psuedocode:

- start with picking second element in an array
- compare second element with previous element. swap if necessary
- Continue to next element. If its in the incorrect place, iterate through sorted portion (left side) to place element in the correct place

Time Complexity:

- Worst case (totally unsorted/numbers reversed): O(n^2)
- Best case (nearly sorted): much faster

One strength: Works well in situation is coming in live/streaming, and you need to sort it at a moment's notice.
