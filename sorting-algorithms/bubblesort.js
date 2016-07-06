'use strict';

const bubbleModule = module.exports = (function() {

  /*
  * Bubble sort works in a nature similar to its name,
  * the lesser - or lighter - values
  * will 'bubble' to the beginning of the array,
  * and the heavier values will 'sink'
  * to the bottom.
  */
  return {
    bubbleSort : (array) => {

      //create variables for swapping and our while loop condition
      let prev;
      let swapped = true;

      //Continue making passes until we have a clean pass with no swaps.
      while (swapped) {

        //init swapped to false at the top of the while loop
        swapped = false;

        //loop through our array
        for (let i = 0; i < array.length; i++) {

          //at each position, compare this element with the previous
          //if this one is greater than our previous one swap it and
          //flag our conditional to loop through our array again
          if (array[i - 1] > array[i]) {

            //store the prev variable to our previous element
            prev = array[i - 1];

            //set our previous element to this element
            array[i - 1] = array[i];

            //set this element to our prev variable
            array[i] = prev;

            //flag our conditional to continue looping
            swapped = true;
          }
        }
      }
      //return our sorted array
      return array;
    }
  }
});

const arr = [5,1,4,2,8];
const bubbleSort = bubbleModule();
console.log(bubbleSort.bubbleSort(arr));
