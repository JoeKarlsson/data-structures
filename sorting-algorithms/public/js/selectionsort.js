'use strict';

var visualizationModule = require( './visualization.js' );
var sortHelperModule = require( './sortHelper.js' );

var visualizer = visualizationModule();
var sortHelper = sortHelperModule();

var selectionModule = module.exports = ( function () {

  /**
   * Callback function that is called when the sorting animation is completed
   * @param  {[array]} array
   * @return {[array]}
   */
  function endAnimation( array ) {
    console.log( 'END' );
    return array
  }

  return {

    /**
     * The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
     */
    selectionSort : function ( array ) {

      // advance the position through the entire array (could do j < n-1 because single element is also min element)
      var interval = setInterval( selectionFrame.bind( null, array, endAnimation ), 10 );

      var i = 0;

      // find the min element in the unsorted a[i .. n-1] assume the min is the first element
      var min = i;

      function selectionFrame( array, callback ) {

        if ( i >=  array.length - 1 ) {
          console.log('enter clear Interval')
          clearInterval(interval);
          callback(array);
        }

        // Test against elements after j to find the smallest
        for ( var j = i + 1; j < array.length; j++ ) {

          // if this element is less, then it is the new minimum
          if ( array[j] < array[min] ) {

            // found new minimum; remember its index
            min = j;
          }
        }

        // if the minimum number we found on our pass is not equal to our starting number, then make the swap
        if ( min !== i ) {
          sortHelper.swap( array, i, min );

          console.log( array )

          //draw the newly swapped array onto the DOM
          visualizer.drawArray( array );
        }

        i++;
      }
      return array;
    }

  }

});

// var arr = [5,1,4,2,8];
// var selection = selectionModule();
// console.log(selection.selectionSort(arr));