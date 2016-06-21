var bubbleModule = require('./bubblesort.js');
var quickModule = require('./quicksort.js');
var mergeModule = require('./mergesort.js');
var insertionModule = require('./insertionsort.js');
var selectionModule = require('./selectionsort.js');
var visualizationModule = require('./visualization.js');

//Initilize modules
var visualizer = visualizationModule();
var bubble = bubbleModule();
var insertion = insertionModule();
var selection = selectionModule();
var quick = quickModule();
var merge = mergeModule();

//Initilize shared variables
var shuffledArray;

//In-app functions
//method to create buttons
function createButton (action, name) {
  var button = document.createElement('button');
  button.innerHTML = name;
  button.setAttribute('id', action);
  document.getElementById('visualizer').appendChild(button);
}

//method to create a new random dataset and clear the currently sorted one
function reset () {
  shuffledArray = visualizer.getRandomArray();
  visualizer.drawArray(shuffledArray);
}

$(document).ready(function() {
  //init our random array
  reset();

  $('#bubble').click(function() {
    bubble.bubbleSort(shuffledArray);
  });

  $('#insertion').click(function() {
    insertion.insertionSort(shuffledArray);
  });

  $('#selection').click(function() {
    selection.selectionSort(shuffledArray);
  });

  $('#reset').click(function() {
    reset();
  });
});

//create a button for each algorithm and reset func
createButton('bubble', 'Bubble Sort');
createButton('insertion', 'Insertion Sort');
createButton('selection', 'Selection Sort');
createButton('reset', 'Reset');