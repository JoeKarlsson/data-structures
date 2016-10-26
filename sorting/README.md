# Sorting Algorithms

5 popular sorting algorithms implemented manually and visualized with DOM manipulation.
The algorithms included are : bubble sort, merge sort, insertion sort, selection sort and quick sort. In addition to visualizations, this readme also includes high-level explanations and psuedo code for each sorting implementation, and big O worst case/ best case scenarios.

You can check out a live version of these sorting algorithms [here](https://joekarlsson1.github.io/sorting-alogorithms/):


## Visualizations

Click on the different sorting algorithms to see visualizations for each different algorithm implementation. Before each sort, click on reset to randomize the order of the array. You are also able to adjust the speed of the sorting intervals at the top.

## bubble sort

### [javascript implementation](public/js/bubblesort.js)

Bubble sort works in a nature similar to its name, the lesser or lighter values will 'bubble' to the beginning of the array, and the heavier values will sink.
```
procedure bubbleSort( A : list )
do
    swapped = false
    for i < A.length - 1
        if A[i-1] > A[i]
        swap ( A[i-1] > A[i] )
        swapped = true
        end if
    end for
    while swapped == true
end procedure
```
This process is done by making a do while loop, where the condition will exit if the array is sorted. Then we  iterate over the array, and compare each element to the next one. If the element is lighter, then you swap their positions in the array, repeat until you hit the end of the array while always setting a conditional value to true. If you loop through the array, and the conditional value is never set, meaning there are no swaps, then you exit out of the array.

### Best Case
Linearly increases time spent to sort with size of array. O(n)

### Worst Case
Exponentially increases time spent to sort. O(n^2)

## merge sort

### [javascript implementation](public/js/mergesort.js)

The process for this method takes two procedures, first splitting the array into smaller lists, then merging those lists back together, comparing the values of the two lists. Recursion is used to split the array into the smallest possible lists.
``` psuedocode
procedure mergeSort ( A : list )
    if A.length < 2
        return A

    middle = A.length / 2
    left = A.slice 0, middle
    right = A.slice middle, A.length

    return merge(mergeSort(left), mergeSort(right);

procedure merge (left, right)
    result = []
    while left.length && right.length both exist
        if left[0] <= right[0]
            push left to result
        else
            push right to result
    end while

    while only left exists
        push left

    while only right exists
        push right

    return result
```
If the list is 0 or 1 length, then its already sorted and we can return the array. Else, we have to find the mid point of the aray, then split it into a left and right array. Our second piece of logic takes in a left and right array, which returns a merged array. If both left and right arrays have a length, then we compare the first value of both, and push the lower value to the return array. Our first procedure utilizes recursion to get the smallest available arrays.

### Best & Worst Case
Logarithimically and linearlly increases time spent to sort with size array. It's more efficient the larger the size of the array, not great for small arrays. O(n log(n))

## insertion sort

### [javascript implementation](public/js/insertionsort.js)

For each iteration in our insertion sort method, a single element is taken to find its location in a new sorted list. This pattern repeats until the old array has no elements left.

```
for i = 1 to A.length - 1
    j = i
    while j > 0 and A[j-1] > A[j]
        swap A[j-1] and A[j]
        j = j - 1
```

First, we have to iterate over our array, then we set a variable to our position in the array, j. While j has a length, we compare our values between our position and the next position in the array. If the next position is bigger, then we swap the two, and decrement j by 1;

### Best Case
Linerally increases time with size. O(n)

### Worst Case
Exponentially increases time with size. O(n^2)

## selection sort

### [javascript implementation](public/js/selectionsort.js)

Searches the array to find the smallest value, then loops again to find the next smallest value. Assuming minimum is the first element, we compare our minimums then swap it with the position it should be in from the beginning.

```
for i = 0 to A.length - 1

    min = i;

    for j = i + 1 to A.length

      if A[j] < A[min]

        min = j

    if min != i
      swap A[i] and A[min]
```
We loop through our array, and set our min position variable to our first positon. We then loop again through the array with our variable j, and check if our position is our new minimum. If it is, then we set our min position to j. If min is not i, then we swap our new minimum with our current position.

### Best & Worst Case
Exponentially increases time with size. O(n^2)

## quicksort

### [javascript implementation](public/js/quicksort.js)

Otherwise known as partition-exchange sort, quicksort picks a pivot from the array, then reorders the array with values lower than the pivot before the pivot, and higher values after the pivot. After this is done, pivot belongs in this position, and we recursively apply the same steps to the other partitions.

```
quicksort(A, left, right)

  pivot = null

  if left does not exist
    left = 0

  if right does not exist
    right = A.length - 1

  if left < right
    pivot = position between left and right
    newPart = partition(A, pivot, left, right)
    quicksort(A, left, newPart - 1)
    quicksort(A, newPart + 1, right)

partition(A, pivot, left, right)

  pivotValue = A[pivot]
  index = left

  swap pivot and right

  for i = left i <= right i++

    if A[i] < pivotValue
      swap i and index
      index++

  swap right and index

  return index
```
First we determine a pivot and loop through our array, if the value at our position is less than or equal to our pivot, then swap our position of i in the array to our position of j.
Return j. We recursively do this until we have no more partitions.

### Best Case

Logarithimically and linearlly increases time spent to sort with size array. It's more efficient the larger the size of the array, not great for small arrays. O(n log(n))

### Worst Case

Exponentially increase the time spent to sort with size array.

- [ ] [Bubble Sort (video)](https://www.youtube.com/watch?v=P00xJgWzz2c&index=1&list=PL89B61F78B552C1AB)
- [ ] [Analyzing Bubble Sort (video)](https://www.youtube.com/watch?v=ni_zk257Nqo&index=7&list=PL89B61F78B552C1AB)
- [ ] [Insertion Sort, Merge Sort (video)](https://www.youtube.com/watch?v=Kg4bqzAqRBM&index=3&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb)
- [ ] [Insertion Sort (video)](https://www.youtube.com/watch?v=c4BRHC7kTaQ&index=2&list=PL89B61F78B552C1AB)
- [ ] [Merge Sort (video)](https://www.youtube.com/watch?v=GCae1WNvnZM&index=3&list=PL89B61F78B552C1AB)
- [ ] [Quicksort (video)](https://www.youtube.com/watch?v=y_G9BkAm6B8&index=4&list=PL89B61F78B552C1AB)
- [ ] [Selection Sort (video)](https://www.youtube.com/watch?v=6nDMgr0-Yyo&index=8&list=PL89B61F78B552C1AB)

- [ ] Stanford lectures on sorting:
    - [ ] [Lecture 15 | Programming Abstractions (video)](https://www.youtube.com/watch?v=ENp00xylP7c&index=15&list=PLFE6E58F856038C69)
    - [ ] [Lecture 16 | Programming Abstractions (video)](https://www.youtube.com/watch?v=y4M9IVgrVKo&index=16&list=PLFE6E58F856038C69)

- [ ] Shai Simonson, [Aduni.org](http://www.aduni.org/):
    - [ ] [Algorithms - Sorting - Lecture 2 (video)](https://www.youtube.com/watch?v=odNJmw5TOEE&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=2)
    - [ ] [Algorithms - Sorting II - Lecture 3 (video)](https://www.youtube.com/watch?v=hj8YKFTFKEE&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=3)

- [ ] Steven Skiena lectures on sorting:
    - [ ] [lecture begins at 26:46 (video)](https://youtu.be/ute-pmMkyuk?list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&t=1600)
    - [ ] [lecture begins at 27:40 (video)](https://www.youtube.com/watch?v=yLvp-pB8mak&index=8&list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b)
    - [ ] [lecture begins at 35:00 (video)](https://www.youtube.com/watch?v=q7K9otnzlfE&index=9&list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b)
    - [ ] [lecture begins at 23:50 (video)](https://www.youtube.com/watch?v=TvqIGu9Iupw&list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&index=10)

- [ ] UC Berkeley:
    - [ ] [CS 61B Lecture 29: Sorting I (video)](https://www.youtube.com/watch?v=EiUvYS2DT6I&list=PL4BBB74C7D2A1049C&index=29)
    - [ ] [CS 61B Lecture 30: Sorting II (video)](https://www.youtube.com/watch?v=2hTY3t80Qsk&list=PL4BBB74C7D2A1049C&index=30)
    - [ ] [CS 61B Lecture 32: Sorting III (video)](https://www.youtube.com/watch?v=Y6LOLpxg6Dc&index=32&list=PL4BBB74C7D2A1049C)
    - [ ] [CS 61B Lecture 33: Sorting V (video)](https://www.youtube.com/watch?v=qNMQ4ly43p4&index=33&list=PL4BBB74C7D2A1049C)

- [ ] - Merge sort code:
    - [ ] [Using output array](http://www.cs.yale.edu/homes/aspnes/classes/223/examples/sorting/mergesort.c)
    - [ ] [In-place](https://github.com/jwasham/practice-cpp/blob/master/merge_sort/merge_sort.cc)
- [ ] - Quick sort code:
    - [ ] [Implementation](http://www.cs.yale.edu/homes/aspnes/classes/223/examples/randomization/quick.c)
    - [ ] [Implementation](https://github.com/jwasham/practice-c/blob/master/quick_sort/quick_sort.c)

- [ ] Implement:
    - [ ] Mergesort: O(n log n) average and worst case
    - [ ] Quicksort O(n log n) average case
    - Selection sort and insertion sort are both O(n^2) average and worst case
    - For heapsort, see Heap data structure above.

- [ ] For curiosity - not required:
    - [ ] [Radix Sort](http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#radixSort)
    - [ ] [Radix Sort (video)](https://www.youtube.com/watch?v=xhr26ia4k38)
    - [ ] [Radix Sort, Counting Sort (linear time given constraints) (video)](https://www.youtube.com/watch?v=Nz1KZXbghj8&index=7&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb)
    - [ ] [Randomization: Matrix Multiply, Quicksort, Freivalds' algorithm (video)](https://www.youtube.com/watch?v=cNB2lADK3_s&index=8&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp)
    - [ ] [Sorting in Linear Time (video)](https://www.youtube.com/watch?v=pOKy3RZbSws&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&index=14)