var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleModule = require('./../public/js/bubblesort.js');
var quickModule = require('./../public/js/quicksort.js');
var mergeModule = require('./../public/js/mergesort.js');
var insertionModule = require('./../public/js/insertionsort.js');
var selectionModule = require('./../public/js/selectionsort.js');
var visualizationModule = require('./../public/js/visualization.js');

describe('Bubble Sort', function () {
  var bubble = bubbleModule();
  var result = bubble.bubbleSort([3,2,1]);

  it('should be a function that exists', function () {
    expect(bubbleModule).to.be.a('function');
  });

  it('should be a module that exists', function () {
    expect(bubble).to.be.a('object');
  });

  it('should be return a sorted array', function () {
    expect( result ).to.deep.equal([ 1, 2, 3]);
  });
});

describe('Quick Sort', function () {
  it('should be a module that exists', function () {
    expect(quickModule).to.be.a('function');
  });
});

describe('Merge Sort', function () {
  it('should be a module that exists', function () {
    expect(mergeModule).to.be.a('function');
  });
});

describe('Insertion Sort', function () {
  it('should be a module that exists', function () {
    expect(insertionModule).to.be.a('function');
  });
});

describe('Selection Sort', function () {
  it('should be a module that exists', function () {
    expect(selectionModule).to.be.a('function');
  });
});

describe('Visualizer', function () {
  it('should be a module that exists', function () {
    expect(visualizationModule).to.be.a('function');
  });
});