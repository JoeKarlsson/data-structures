const chai = require('chai');
const Queue = require('../queue/queue');
const PriorityQueue = require('../queue/priority-queue');

const { expect } = chai;

describe( 'Queues and Priority Queues', () => {
  describe( 'Queue', () => {
    describe( '`enqueue` and `dequeue` methods', () => {
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
    describe( '`isEmpty` method', () => {
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

  describe( 'Priority Queue', () => {
    let priorityQueue;
    let priorityQueue2;

    beforeEach(() => {
      priorityQueue = new PriorityQueue();
      priorityQueue2 = new PriorityQueue();
    });

    describe( 'constructor', () => {
      it( 'should initially be empty', () => {
        expect(priorityQueue).to.deep.equal({
          _nodes: [],
        });
        expect(priorityQueue.isEmpty()).to.equal(true);
      });
    });

    describe( '`enqueue` method', () => {
      it( 'should be queued in order of priority', () => {
        priorityQueue.enqueue(1, 'BMO');
        priorityQueue.enqueue(2, 'Cake');
        priorityQueue.enqueue(3, 'Finn');
        priorityQueue.enqueue(4, 'Jake');
        expect(priorityQueue).to.deep.equal({
          _nodes: [
            { key: 'BMO', priority: 1 },
            { key: 'Cake', priority: 2 },
            { key: 'Finn', priority: 3 },
            { key: 'Jake', priority: 4 },
          ],
        });
        priorityQueue2.enqueue(4, 'BMO');
        priorityQueue2.enqueue(3, 'Cake');
        priorityQueue2.enqueue(2, 'Finn');
        priorityQueue2.enqueue(1, 'Jake');
        expect(priorityQueue2).to.deep.equal({
          _nodes: [
            { key: 'Jake', priority: 1 },
            { key: 'Finn', priority: 2 },
            { key: 'Cake', priority: 3 },
            { key: 'BMO', priority: 4 },
          ],
        });
      });
      it( 'should be queued in the order they arrive if the prioroty is the same', () => {
        priorityQueue.enqueue(1, 'BMO');
        priorityQueue.enqueue(1, 'Cake');
        priorityQueue.enqueue(1, 'Finn');
        priorityQueue.enqueue(1, 'Jake');
        expect(priorityQueue).to.deep.equal({
          _nodes: [
            { key: 'BMO', priority: 1 },
            { key: 'Cake', priority: 1 },
            { key: 'Finn', priority: 1 },
            { key: 'Jake', priority: 1 },
          ],
        });
      });
    });
    describe( '`dequeue` method', () => {
      it( 'should dequeue the highest priority items first', () => {
        priorityQueue.enqueue(4, 'BMO');
        priorityQueue.enqueue(3, 'Cake');
        priorityQueue.enqueue(2, 'Finn');
        priorityQueue.enqueue(1, 'Jake');
        expect(priorityQueue.dequeue()).to.deep.equal('Jake');
        expect(priorityQueue.dequeue()).to.deep.equal('Finn');
        expect(priorityQueue.dequeue()).to.deep.equal('Cake');
        expect(priorityQueue.dequeue()).to.deep.equal('BMO');
        expect(priorityQueue.dequeue()).to.deep.equal(null);
      });
      it( 'should return null when the list is empty', () => {
        priorityQueue.enqueue(4, 'BMO');
        priorityQueue.enqueue(3, 'Cake');
        priorityQueue.enqueue(2, 'Finn');
        priorityQueue.enqueue(1, 'Jake');
        expect(priorityQueue.dequeue()).to.deep.equal('Jake');
        expect(priorityQueue.dequeue()).to.deep.equal('Finn');
        expect(priorityQueue.dequeue()).to.deep.equal('Cake');
        expect(priorityQueue.dequeue()).to.deep.equal('BMO');
        expect(priorityQueue.dequeue()).to.deep.equal(null);
        expect(priorityQueue.dequeue()).to.deep.equal(null);
        expect(priorityQueue.dequeue()).to.deep.equal(null);
        expect(priorityQueue.dequeue()).to.deep.equal(null);
      });
    });

  });
});
