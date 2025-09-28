/**
 Basic priority queue implementation.
  If a better priority queue is wanted/needed,
*/

class PriorityQueue {
  constructor() {
    this._nodes = [];
  }

  enqueue(priority, key) {
    this._nodes.push({
      key,
      priority,
    });
    this.sort();
  }

  dequeue() {
    if (this._nodes.length <= 0) {
      return null;
    }
    return this._nodes.shift().key;
  }

  sort() {
    this._nodes.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return !this._nodes.length;
  }
}

module.exports = PriorityQueue;
