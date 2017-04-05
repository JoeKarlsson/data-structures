const swap = ( arr, i1, i2 ) => {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
  return arr;
};

// Recursive implementation of Bubble Sort
const bubbleSort = ( arr ) => {
  let swapped = false;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > arr[i + 1] ) {
      swap( arr, i, i + 1 );
      swapped = true;
    }
  }

  if ( swapped === true ) {
    return bubbleSort( arr );
  }
  return arr;
};

module.exports = bubbleSort;
