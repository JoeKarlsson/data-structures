'use strict';

var insertionModule = module.exports = (function() {
  //swap method because its used multiple times
  function swap (array, index1, index2) {

    //store a tmp variable at pos index2
    var tmp = array[index2];

    //set value  of index2 to our value at index
    array[index2] = array[index1];

    //set our value of index1 to our stored variable
    array[index1] = tmp;
  }

  return {
    /**
     * Over each iteration insertion sort removes one element from the input array, finds the location it belongs to and inserts it at this point.
     * @param  array unsorted array that will be sort
     * @return array sorted array
     */
    insertionSort : function (a) {

      //Iterate over each element in the array - for each element we will be finding the correct place to put this element
      for (var i = 1; i < a.length-1; i++) {

        //init j to i
        var j = i;

        //while our previous number is greater than 0, and the number we're comparing is less than our previous number enter our loop
        while ( j > 0 && (a[j - 1] > a[j]) ) {

          //shift the number down the array and give us a space to insert our current value
          swap(a, j, j - 1)

          //decrement j to go through our entire array
          j--;
        }
      };
      return a;
    }

  }

});

var arr = [5,1,4,2,8];
var insertion = insertionModule();
console.log(insertion.insertionSort(arr), ' Insterton Sort');
