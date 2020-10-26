Hash Tables/Hash Map:

- almost all languages have a built-in version.

- We can implement a hash table with an array (just for the sake of the exercise)
  - in order to look up values by key, we need a way to Convert keys into valid array indices
    - we do this with a HASH function
      - have a function that converts some string or values into an integer, and store the element there
        - this function must be deterministic, so we can use the same value for retrieval, once stored

Hash Functions: used for many purposes. We'll use to model a hash table

- can't usually work backwards from the result of a hash to the original input

What makes a good hash:

- Fast (i.e. constant time)
- distributes outputs uniformly, rather than clustering them
- Deterministic: same input yields the same output

UTF character codes: special code associated with characters

- could add together all UTF values in a string
- subtract 96 from alphabetic's character's code to get position in alphabet (i.e. 1 for a, 26 for z)
- use modulo arrayLen to get index

Time Complexity:

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)

Hash tables: (non-cryptographically secure)

- should be fast
- distribute keys uniformly
- be deterministic

Separate chaining and linear probing: two strategies used to deal with 2 keys that hash to the same index
