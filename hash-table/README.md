# Hash Tables

Hash tables optimize storage for key-value pairs. In best case scenarios hash table insertion, retrieval and deletion are constant time. Hash tables are used to store large amounts of quickly accessible information like passwords.

Anatomy of a Hash Table:

This is a basic Javascript hash table implementation. A hash table can be conceptualized as an array holding a series of tuples stored in sub-arrays inside of an object:

```
{ [[ [‘a’, 9], [‘b’, 88] ],[ [‘e’, 7], [‘q’, 8] ],[ [‘j’, 7], [‘l’, 8] ]] };
```

The outer array holds a number of buckets (sub-arrays) equal to the max length of the array. Inside the buckets, tuples or two element arrays hold key-value pairs.

When key-value pairs are inserted into the hash table, the key is hashed with a hashing function. The key and the maximum length of the array are passed to the hashing function which returns an index used to identify the bucket.

- hash table
  - hash(k, m) - m is size of hash table
  - add(key, value) - if key already exists, update value
  - exists(key)
  - get(key)
  - remove(key)