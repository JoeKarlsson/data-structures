const chai = require('chai');
const { expect } = chai;
chai.should();

const Stack = require('../stack/stack');

describe( 'Stack', () => {
  describe( '"push" and "pop" methods', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it( 'should return `null` if the stack is empty', () => {
      expect(stack.pop()).to.equal(null);
      expect(stack.pop()).to.equal(null);
      expect(stack.pop()).to.equal(null);
    });
    it( 'should return the last value pushed onto the stack', () => {
      stack.push('turtle');
      stack.push('dog');
      stack.push('cat');
      expect(stack.pop()).to.equal('cat');
    });
    it('should remove the last element from the stack when popped', () => {
      stack.push('turtle');
      stack.push('dog');
      stack.push('cat');
      stack.pop();
      expect(stack.pop()).to.equal('dog');
    });
    it('should rereturn null when all of the nodes have been popped off teh stack', () => {
      stack.push('turtle');
      stack.push('dog');
      stack.push('cat');
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.pop()).to.equal(null);
    });
  });
});
