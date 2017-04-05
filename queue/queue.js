class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue( value ) {
    const newNode = {
      value,
      next: null,
    };
    if ( !this.front ) {
      this.back = newNode;
      this.front = this.back;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if ( this.front ) {
      const value = this.front.value;
      this.front = this.front.next;
      return value;
    }
    return null;
  }

  isEmpty() {
    if ( this.front === null ) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
