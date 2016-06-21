'use strict';

var visualizationModule = module.exports = (function() {

  // length of the array
  var inputNumber = 70;

  // method called in createGrid that takes in data from the array and makes a visual representation from it according to height and color
  function createCell ( data, index ) {

    var cell = document.createElement( 'div' );
    cell.style.width = '8px';
    cell.style.height = data + '2px';
    cell.style.fontSize = '8px';
    cell.style.color = 'white';
    cell.style.padding = '5px';
    cell.id = 'div' + index;
    cell.innerHTML = data;

    // hex value parsing
    data = data.toString( 16 );
    if ( data.length < 2 ) {
      data = '0' + data;
    }

    cell.style.backgroundColor = '#' + '00' + data + data;
    return cell;
  }

  return {

    // first generate a sorted array for inputNumber length
    makeSorted : function ( input ) {
      var array = [];
      for ( var i = 0; i < inputNumber; i++ ) {
        array.push( i + 1 );
      }
      return array;
    },

    // set method for later user interaction
    setLength : function ( input ) {
      inputNumber = input;
    },

    // take our newly generated sorted array and randomly scramble it
    getRandomArray : function() {
      var newArray = this.makeSorted( inputNumber );
      var currentIndex = newArray.length;
      var temporaryValue;
      var randomIndex;

      // while there remain elements to shuffle
      while ( currentIndex > 0 ) {

        // pick a remaining element
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex--;

        // and swap it with the current element
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
      }
      return newArray;
    },

    drawArray : function ( array ) {
      // get our container in static HTML page
      var container = document.querySelector( '#visualizer' );

      createGrid( array );

      // method generates a dom element with an array parameter
      function createGrid ( array ) {

        // if it exists already, clear it
        if ( document.querySelector( '#grid' ) ) {
          container.removeChild( document.querySelector( '#grid' ) );
        }

        // create a new DOM element to append the pieces to
        var grid = document.createElement( 'div' );
        grid.id = 'grid';
        container.appendChild( grid );

        // loop through and for the arrays length generate a new cell for the arrays data
        var piece;
        for ( var i = 0; i < array.length; i++ ) {
          piece = createCell( array[i], i );

          // attach it to the container
          grid.appendChild( piece );
        }

      }

    }

  }

});

// var arr = [14, 5, 48, 1,4,2,8, 15, 3, 6, 20];
// var visual = visualizationModule();
// visual.drawArray(arr);