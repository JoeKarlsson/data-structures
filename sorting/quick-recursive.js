const quickSort = ( arr ) => {
  // Base case
  if ( arr.length <= 1 ) {
    return arr;
  }

  // 1) Pick a pivot
  const pivot = arr[0];

  // 2) Partition into
  const { left, right } = partition(arr, pivot);

  // 3) Call quick sort recursively
  const leftArr = quickSort( left );
  const rightArr = quickSort( right );

  // 4) Concat after calling quicksort recursively
  return leftArr.concat(pivot, rightArr);
};

const partition = (arr, pivot) => {
  const left = [];
  const right = [];

  // Loop through the array and split it into left and right arrays
  for ( let i = 1; i < arr.length; i++ ) {
    // If value is less than the pivot - push into the left array, else push it into the right
    if ( arr[i] < pivot ) {
      left.push( arr[i] );
    } else if ( arr[i] >= pivot ) {
      right.push( arr[i] );
    }
  }

  return {
    left,
    right,
  };
};

module.exports = quickSort;
