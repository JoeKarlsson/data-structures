http://eloquentjavascript.net/1st_edition/appendix2.html
# Binary Heap

A binary heap is a heap data structure that takes the form of a binary tree. Binary heaps are a common way of implementing priority queues.

A binary heap is defined as a binary tree with two additional constraints.

Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.

Heap property: the key stored in each node is either greater than or equal to or less than or equal to the keys in the node's children, according to some total order.

|____      |Average     |Worst Case  |
|----------|------------|------------|
|Space     |`O(n)`      |`O(n)`      |
|Search    |`O(n)`      |`O(n)`      |
|Insert    |`O(1)`      |`O(log n)`  |
|Delete    |`O(log n)`  |`O(log n)`  |
|Peek      |`O(1)`      |`O(1)`      |

### Pseudocode

```
Max-Heapify (A, i):
    left ← 2*i // ← means "assignment"
    right ← 2*i + 1
    largest ← i

    if left ≤ heap_length[A] and A[left] > A[largest] then:
        largest ← left
    if right ≤ heap_length[A] and A[right] > A[largest] then:
        largest ← right

    if largest ≠ i then:
        swap A[i] and A[largest]
        Max-Heapify(A, largest)
```

# Additional Resources

#### Binary Heap - Wikipedia
- Link: [Binary heap - Wikipedia](https://en.wikipedia.org/wiki/Binary_heap)

- Link: [Binary heap - Eloquent JavaScript](http://eloquentjavascript.net/1st_edition/appendix2.html)