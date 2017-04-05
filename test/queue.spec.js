const chai = require('chai');
const { expect } = chai;
chai.should();

const Queue = require('../queue/queue');

describe( 'Queue', () => {
  describe( '"enqueue" and "dequeue" methods', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it( 'should return `null` if the queue is empty', () => {
      expect(queue.dequeue()).to.equal(null);
      expect(queue.dequeue()).to.equal(null);
      expect(queue.dequeue()).to.equal(null);
    });
    it( 'should return the last value pushed onto the stack', () => {
      queue.enqueue('turtle');
      queue.enqueue('dog');
      queue.enqueue('cat');
      expect(queue.dequeue()).to.equal('turtle');
    });
    it('should remove the last element from the stack when popped', () => {
      queue.enqueue('turtle');
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.dequeue();
      expect(queue.dequeue()).to.equal('dog');
    });
    it('should return null when all of the nodes have been dequeued off the queue', () => {
      queue.enqueue('turtle');
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).to.equal(null);
    });
  });
  describe( '"isEmpty" method', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it( 'should initially be empty', () => {
      expect(queue.isEmpty()).to.equal(true);
    });

    it( 'should return false when an node is added to the queue', () => {
      queue.enqueue('turtle');
      expect(queue.isEmpty()).to.equal(false);
    });
  });
});
