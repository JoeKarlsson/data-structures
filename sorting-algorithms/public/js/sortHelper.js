'use strict';

var sortHelperModule = module.exports = ( function() {

  //Everything after the return statement is public
  return {

    //swap method
    swap : function( array, index1, index2 ) {

      //store a tmp variable at pos index2
      var tmp = array[index2];

      //set value  of index2 to our value at index
      array[index2] = array[index1];

      //set our value of index1 to our stored variable
      array[index1] = tmp;
    }

  }

});