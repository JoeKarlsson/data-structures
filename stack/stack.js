'use strict';

const stackGenerator = () => {
  let top = null;

  const _push = ( value ) => {
    const newNode = {
      value,
      next: top,
    }
    top = newNode;
  }

  const _pop = () => {
    if ( !top ) {
      const value = top.value;
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

const stack = stackGenerator();
stack.push('first');
stack.push('second');
stack.push('third');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());