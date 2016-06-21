'use strict';

var visualizationModule = require( './visualization.js' );
var sortHelperModule = require( './sortHelper.js' );

var visualizer = visualizationModule();
var sortHelper = sortHelperModule();

var bubbleModule = module.exports = ( function() {

  function endAnimation( array ) {
    console.log( 'END' );
    return array
  }

  /*
  Bubble sort works in a nature similar to its name, the lesser - or lighter - values will 'bubble' to the beginning of the array, and the heavier values will 'sink' to the bottom.
  */
  return {

    bubbleSort : function ( array ) {

      //create variables for swapping and our while loop condition
      var prev;
      var swapped = true;

      //loop through our array
      var interval = setInterval( bubbleFrame.bind( null, array, endAnimation ), 10 );

      var i = 1;

      function bubbleFrame( array, callback ) {

        if ( i  >= array.length ) {

          if ( !swapped ) {
            clearInterval( interval );
            callback( array );
          }
          i = 1;
          swapped = false;
        }

        if ( array[i - 1] > array[i] ) {

          sortHelper.swap( array, i, i - 1 );

          swapped = true;

          visualizer.drawArray( array );
        }
        i++
      }

      return array;
    }

  }

});

// var arr = [5,1,4,2,8];
// var arr = [4,3,2,1];
// var bubbleModule = bubbleModule();
// bubbleModule.bubbleSort(arr);