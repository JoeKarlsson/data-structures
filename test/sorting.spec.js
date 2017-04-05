const chai = require('chai');

const expect = chai.expect;
chai.should();

const bubbleModule = require('../sorting/bubblesort.js');
const bubbleRecursive = require('../sorting/bubble-recursive.js');
const quickModule = require('../sorting/quicksort.js');
const quickRecursive = require('../sorting/quick-recursive.js');
const mergeModule = require('../sorting/mergesort.js');
const insertionModule = require('../sorting/insertionsort.js');
const selectionModule = require('../sorting/selectionsort.js');

describe('Sorting', () => {
  describe('Bubble Sort', () => {
    const bubble = bubbleModule();
    const result = bubble.bubbleSort([3, 2, 1]);

    it('should be a function that exists', () => {
      expect(bubbleModule).to.be.a('function');
    });
    it('should be a module that exists', () => {
      expect(bubble).to.be.a('object');
    });
    it('should be return a sorted array', () => {
      expect( result ).to.deep.equal([1, 2, 3]);
    });
  });

  describe('Bubble Sort - Recursive', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];

    it('should be a function that exists', () => {
      expect(bubbleRecursive).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( bubbleRecursive( arr ) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });

  describe('Quick Sort - Recursive', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];

    it('should be a module that exists', () => {
      expect(quickRecursive).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( quickRecursive(arr) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });

  describe('Quick Sort', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
    const quick = quickModule();

    it('should be a module that exists', () => {
      expect(quickModule).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( quick.quickSort(arr) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });

  describe('Merge Sort', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
    const merge = mergeModule();

    it('should be a module that exists', () => {
      expect(mergeModule).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( merge.mergeSort(arr) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });

  describe('Insertion Sort', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
    const insert = insertionModule();

    it('should be a module that exists', () => {
      expect(insertionModule).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( insert.insertionSort( arr ) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });

  describe('Selection Sort', () => {
    const arr = [5, 1, 4, 2, 8, 7, 9, 9, 2, 4, 5, 6];
    const select = selectionModule();

    it('should be a module that exists', () => {
      expect(selectionModule).to.be.a('function');
    });
    it('should be return a sorted array', () => {
      expect( select.selectionSort( arr ) ).to.deep.equal([1, 2, 2, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]);
    });
  });
});
