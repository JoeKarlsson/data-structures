'use strict';

const stackGenerator = () => {
  let top = null;

  const _push = ( value ) => {
    let newNode = {
      value,
      next: top,
    }
    top = newNode;
  }

  const _pop = () => {
    if ( top !== null ) {
      let value = top.value;
      top = top.next;
      return value;
    }
    return null;
  }

  return {
    pop: _pop,
    push: _push,
  }
}

var stack = stackGenerator();
stack.push('first');
stack.push('second');
stack.push('third');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());