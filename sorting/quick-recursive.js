'use strict';

const quickSort = ( arr ) => {

  // Base case
  if( arr.length <= 1 ) {
    return arr;
  }

  // 1) Pick a pivot
  const pivot = arr[0];

  // 2) Partition into
  let { left, right } = partition(arr, pivot);

  // 3) Call quick sort recursively
  let leftArr = quickSort( left );
  let rightArr = quickSort( right );

  // 4) Concat after calling quicksort recursively
  return leftArr.concat(pivot, rightArr)
}

const partition = (arr, pivot) => {
  let left = [];
  let right = [];

  // Loop through the array and split it into left and right arrays
  for( let i = 1; i < arr.length; i++ ) {

    // If value is less than the pivot - push into the left array, else push it into the right
    if( arr[i] < pivot ) {
      left.push( arr[i] )
    } else if( arr[i] > pivot ) {
      right.push( arr[i] )
    }
  }

  return {
    left,
    right,
  }
}

const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
console.log(quickSort(arr));
