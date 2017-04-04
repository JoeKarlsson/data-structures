const quickSort = ( arr ) => {
  let pivot = arr[0];

  if( arr.length <= 1 ) {
    return arr;
  }

  let left = [];
  let right = [];

  for( let i = 1; i < arr.length; i++ ) {
    if( arr[i] < pivot ) {
      left.push( arr[i] )
    } else if( arr[i] > pivot ) {
      right.push( arr[i] )
    }
  }

  return quickSort( left ).concat(pivot, quickSort( right ))
}

let arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
console.log(quickSort(arr));
