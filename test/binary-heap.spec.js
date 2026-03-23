import { expect } from 'chai';
import BinaryHeap from '../binary-heap/binaryHeap.js';

describe('BinaryHeap', () => {
  let heap;

  beforeEach(() => {
    heap = new BinaryHeap(x => x);
  });

  describe('Constructor', () => {
    it('should return a new empty binary heap', () => {
      expect(heap.content).to.deep.equal([]);
      expect(heap.size()).to.equal(0);
    });
  });

  describe('push', () => {
    it('should add elements to the heap', () => {
      heap.push(5);
      expect(heap.size()).to.equal(1);
      expect(heap.content[0]).to.equal(5);
    });

    it('should maintain min-heap property', () => {
      heap.push(5);
      heap.push(3);
      heap.push(7);
      heap.push(1);
      // The smallest element should be at the top
      expect(heap.content[0]).to.equal(1);
    });

    it('should handle multiple elements', () => {
      const data = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
      data.forEach(el => heap.push(el));
      expect(heap.size()).to.equal(11);
      expect(heap.content[0]).to.equal(1); // min element at top
    });
  });

  describe('pop', () => {
    it('should return undefined for empty heap', () => {
      expect(heap.pop()).to.be.undefined;
    });

    it('should remove and return the minimum element', () => {
      heap.push(5);
      heap.push(3);
      heap.push(7);
      expect(heap.pop()).to.equal(3);
      expect(heap.size()).to.equal(2);
    });

    it('should return elements in sorted order', () => {
      const data = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
      data.forEach(el => heap.push(el));

      const sorted = [];
      while (heap.size() > 0) {
        sorted.push(heap.pop());
      }
      expect(sorted).to.deep.equal([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should handle single element', () => {
      heap.push(42);
      expect(heap.pop()).to.equal(42);
      expect(heap.size()).to.equal(0);
    });
  });

  describe('remove', () => {
    it('should remove a specific element from the heap', () => {
      const data = [10, 3, 4, 8, 2, 9, 7, 1, 6, 5];
      data.forEach(el => heap.push(el));

      heap.remove(4);
      expect(heap.size()).to.equal(9);

      // Verify 4 is no longer in the heap
      const remaining = [];
      while (heap.size() > 0) {
        remaining.push(heap.pop());
      }
      expect(remaining).to.not.include(4);
    });

    it('should handle removing the minimum element', () => {
      heap.push(5);
      heap.push(3);
      heap.push(7);

      heap.remove(3);
      expect(heap.size()).to.equal(2);
      expect(heap.pop()).to.equal(5);
    });

    it('should handle removing the last element', () => {
      heap.push(5);
      heap.push(3);
      heap.push(7);

      heap.remove(7);
      expect(heap.size()).to.equal(2);
    });

    it('should do nothing if element not found', () => {
      heap.push(5);
      heap.push(3);
      heap.remove(99);
      expect(heap.size()).to.equal(2);
    });
  });

  describe('size', () => {
    it('should return 0 for empty heap', () => {
      expect(heap.size()).to.equal(0);
    });

    it('should return correct size after operations', () => {
      heap.push(1);
      heap.push(2);
      expect(heap.size()).to.equal(2);
      heap.pop();
      expect(heap.size()).to.equal(1);
    });
  });

  describe('with custom score function', () => {
    it('should work with max-heap configuration', () => {
      const maxHeap = new BinaryHeap(x => -x);
      maxHeap.push(5);
      maxHeap.push(10);
      maxHeap.push(3);
      expect(maxHeap.pop()).to.equal(10);
      expect(maxHeap.pop()).to.equal(5);
      expect(maxHeap.pop()).to.equal(3);
    });

    it('should work with object score function', () => {
      const objHeap = new BinaryHeap(obj => obj.priority);
      objHeap.push({ name: 'low', priority: 10 });
      objHeap.push({ name: 'high', priority: 1 });
      objHeap.push({ name: 'medium', priority: 5 });

      expect(objHeap.pop().name).to.equal('high');
      expect(objHeap.pop().name).to.equal('medium');
      expect(objHeap.pop().name).to.equal('low');
    });
  });
});
