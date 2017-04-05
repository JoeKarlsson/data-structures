const chai = require('chai');

const expect = chai.expect;
chai.should();

const bubbleModule = require('../sorting/bubblesort.js');
const quickModule = require('../sorting/quicksort.js');
const mergeModule = require('../sorting/mergesort.js');
const insertionModule = require('../sorting/insertionsort.js');
const selectionModule = require('../sorting/selectionsort.js');

describe('Bubble Sort', function () {
  var bubble = bubbleModule();
  var result = bubble.bubbleSort([3, 2, 1]);

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
  let arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
  const quick = quickModule();

  it('should be a module that exists', function () {
    expect(quickModule).to.be.a('function');
  });
  it('should be return a sorted array', function () {
    expect( quick.quickSort(arr) ).to.deep.equal([ 1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
  });
});

describe('Merge Sort', function () {
  it('should be a module that exists', function () {
    expect(mergeModule).to.be.a('function');
  });
  it('should be return a sorted array', function () {
    expect( result ).to.deep.equal([ 1, 2, 3]);
  });
});

describe('Insertion Sort', function () {
  it('should be a module that exists', function () {
    expect(insertionModule).to.be.a('function');
  });
  it('should be return a sorted array', function () {
    expect( result ).to.deep.equal([ 1, 2, 3]);
  });
});

describe('Selection Sort', function () {
  it('should be a module that exists', function () {
    expect(selectionModule).to.be.a('function');
  });
  it('should be return a sorted array', function () {
    expect( result ).to.deep.equal([ 1, 2, 3]);
  });
});
