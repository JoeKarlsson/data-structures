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