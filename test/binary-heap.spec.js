const chai = require('chai');
const BinaryHeap = require('../binary-heap/binaryHeap');

const { expect } = chai;

describe( 'BinaryHeap', () => {
  let heap;

  beforeEach(() => {
    heap = new BinaryHeap((x) => x);
    const data = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];

    data.forEach((el) => {
      heap.push(el);
    });
  });

  // describe( 'Constructor', () => {
  //   it( 'should return a new empty binary heap', () => {
  //     const fn = ((x) => {
  //       return x;
  //     });
  //     const newHeap = new BinaryHeap(fn);

  //     console.log(newHeap);
  //     expect(newHeap).to.deep.equal({
  //       content: [],
  //       scoreFunction: fn,
  //     });

  //   });
  // });

  describe( 'push', () => {
    it( 'should return a new empty binary heap', () => {
      // console.log(heap.pop())
      // expect.(heap.content).to.deep.equal([1, 2, 4, 2, 5, 9, 7, 10, 3, 8, 6])
    });
  });
});
