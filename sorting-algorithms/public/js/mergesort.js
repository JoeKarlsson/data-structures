'use strict';

var mergeModule = module.exports = ( function() {

  //used to merge all of our pieces back together after recursively separating the array
  function merge ( left, right ) {

    //initialize array to return
    var result = [];

    //if both of our split arrays have items inside go through this while loop
    while ( left.length > 0 && right.length > 0 ) {

      //compare the first element of each array
      if ( left[0] <= right[0] ) {

        //if the left element is smaller, push it
        //to our return array
        result.push( left.shift() );
      } else {

        //if the right element is smaller, push it
        //to our return array
        result.push( right.shift() );
      }
    }

    //if only our left array has an element left, push that
    while ( left.length > 0 ) {
      result.push( left.shift() );
    }

    //if only our right array has an element left, push that
    while ( right.length > 0 ) {
      result.push( right.shift() );
    }

    //return the sorted array
    return result;
  }

  return {

    mergeSort : function ( arr ) {
      //Base Case - if the array is length 0 or 1, then we can assume it is already sorted and return it
      if ( arr.length < 2 ) {
        return arr;
      }

      //pick a pivot at our the middle of our arr
      var pivot = ( Math.floor( arr.length / 2 ) );

      //separate the arr into two places, everything before it
      var pLeft = arr.slice( 0, pivot );

      //and everything after
      var pRight = arr.slice( pivot, arr.length );

      //call our mergeSort recursively on this array, splitting it further and further until it hits our base case and the array is split into lengths less than 2
      return merge( this.mergeSort( pLeft ), this.mergeSort( pRight ) );
    }

  }
});

// var arr = [6,3,8,1,5,4,7,2];
// var merge = mergeModule();
// console.log(merge.mergeSort(arr));