class Stack {
  constructor() {
    this.top = null;
  }

  push( value ) {
    const newNode = {
      value,
      next: this.top,
    };
    this.top = newNode;
  }

  pop() {
    if ( this.top !== null ) {
      const value = this.top.value;
      this.top = this.top.next;
      return value;
    }
    return null;
  }
}

module.exports = Stack;
