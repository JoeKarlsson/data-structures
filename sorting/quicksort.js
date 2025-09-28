const quickModule = (() => {
  // Private Methods and variables

  // swap method because its used multiple times
  const swap = ( array, index1, index2 ) => {

    // store a tmp variable at pos index2
    const tmp = array[index2];

    // set value  of index2 to our value at index
    array[index2] = array[index1];

    // Let our value of index1 to our stored letiable
    array[index1] = tmp;
  };

  // function for creating our partitions and swapping
  const partition = ( arr, pivot, lo, hi ) => {

    // the value of our pivot, where pivot is the index
    const pivotValue = arr[pivot];

    // our new pivot to be, and our comparison
    let index = lo;

    // swap our pivot to the end, because we want it in the hi partition
    swap(arr, hi, pivot);

    // loop through our array, from our lo value, to our hi value
    for ( let i = lo; i < hi; i++ ) {

      // if the value at this position is less than our pivot value, then it needs to be sorted
      // to the left
      if ( arr[i] < pivotValue ) {

        // swap it and the index, and now that we know it should be sorted
        // increment the index because its been sorted
        swap( arr, i, index );
        index++;
      }
    }

    // swap our hi value back with the index value, this is putting our pivot value
    // back where it rightfully belongs
    swap( arr, index, hi );

    // return the index for a new pivot in recursively calling quickSort
    return index;
  };

  // Public methods
  return {
    /*  Known as partition-exchange sort, quicksort picks a pivot from a partition
    *   (assuming the first partition is our array). Reorders our array into lower
    *   higher value partitions, then recursively creates partitions until it cannot.
    *  takes in the array and optionally low and high parameters for recursion
    */
    quickSort( array, low, high ) {

      // reset our pivot for recursive use
      let pivot = null;

      // used for initialization, begin on the end
      if ( typeof low !== 'number' ) {
        low = 0;
      }

      // used for initialization, begin on the end
      if ( typeof high !== 'number' ) {
        high = array.length - 1;
      }

      // base case for recursion, if low is >= high, then its already sorted
      if ( low < high ) {

        // create a point between our low and high values
        pivot = low + ( Math.ceil( ( high - low ) * 0.5) );

        // create the positions and partitions to be recursively sorted
        const nextPivot = partition( array, pivot, low, high );

        // sort from low, to the pivot - 1, because nextPivot belongs where it is
        this.quickSort( array, low, nextPivot - 1 );

        // sort from pivot + 1 to high
        this.quickSort( array, nextPivot + 1, high );
      }

      // return the sorted array
      return array;
    },
  };
});

module.exports = quickModule;
