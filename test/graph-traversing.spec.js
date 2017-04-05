const chai = require('chai');

const expect = chai.expect;

const Node = require('../graph/graphNode');
const breadthFirstSearch = require('../graph-traversing/breadth-first-search');
const breadthFirstSearchQueue = require('../graph-traversing/breadth-first-search-w-queue');
const depthFirstSearch = require('../graph-traversing/depth-first-search-imperative');
const depthFirstSearchRecursive = require('../graph-traversing/depth-first-search-recursive');

describe('Graph Traversing', () => {
  describe('Recursive Depth First Search', () => {
    let A;
    let B;
    let C;
    let D;
    let E;
    let F;

    beforeEach(() => {
      A = new Node('A', 'Joe');
      B = new Node('B', 'Jon');
      C = new Node('C', 'Ray');
      D = new Node('D', 'JSON');
      E = new Node('E', 'Marifel');
      F = new Node('F', 'Nigel');
      A.addNeighbors([B, C]);
      B.addNeighbors([D, E]);
      C.addNeighbors([F]);
    });

    it('should be a function that exists', () => {
      expect(depthFirstSearchRecursive).to.exist;
      expect(depthFirstSearchRecursive).to.be.a('function');
    });

    it('should return the node with the value of `searchFor` stored in its value property', () => {
      expect(depthFirstSearchRecursive(A, 'Joe').value).to.equal('Joe');
      expect(depthFirstSearchRecursive(A, 'JSON').value).to.equal('JSON');
      expect(depthFirstSearchRecursive(A, 'JSON').name).to.equal('D');
      expect(depthFirstSearchRecursive(A, 'Nigel').value).to.equal('Nigel');
      expect(depthFirstSearchRecursive(A, 'Nigel').name).to.equal('F');
      expect(depthFirstSearchRecursive(B, 'Marifel').value).to.equal('Marifel');
      expect(depthFirstSearchRecursive(A, 'Marifel').name).to.equal('E');
    });

    it('should return false if it cant find the value in the graph', () => {
      expect(depthFirstSearchRecursive(F, 'Joe')).to.equal(false);
      expect(depthFirstSearchRecursive(E, 'Joe')).to.equal(false);
    });
  });

  describe('Imperative Depth First Search', () => {
    let A;
    let B;
    let C;
    let D;
    let E;
    let F;

    beforeEach(() => {
      A = new Node('A', 'Joe');
      B = new Node('B', 'Jon');
      C = new Node('C', 'Ray');
      D = new Node('D', 'JSON');
      E = new Node('E', 'Marifel');
      F = new Node('F', 'Nigel');
      A.addNeighbors([B, C]);
      B.addNeighbors([D, E]);
      C.addNeighbors([F]);
    });

    it('should be a function that exists', () => {
      expect(depthFirstSearch).to.exist;
      expect(depthFirstSearch).to.be.a('function');
    });

    it('should return the node with the value of `searchFor` stored in its value property', () => {
      expect(depthFirstSearch(A, 'Joe').value).to.equal('Joe');
      expect(depthFirstSearch(A, 'JSON').value).to.equal('JSON');
      expect(depthFirstSearch(A, 'JSON').name).to.equal('D');
      expect(depthFirstSearch(A, 'Nigel').value).to.equal('Nigel');
      expect(depthFirstSearch(A, 'Nigel').name).to.equal('F');
      expect(depthFirstSearch(B, 'Marifel').value).to.equal('Marifel');
      expect(depthFirstSearch(A, 'Marifel').name).to.equal('E');
    });

    it('should return false if it cant find the value in the graph', () => {
      expect(depthFirstSearch(F, 'Joe')).to.equal(false);
      expect(depthFirstSearch(E, 'Joe')).to.equal(false);
    });
  });

  describe('Breadth First Search', () => {
    let A;
    let B;
    let C;
    let D;
    let E;
    let F;

    beforeEach(() => {
      A = new Node('A', 'Joe');
      B = new Node('B', 'Jon');
      C = new Node('C', 'Ray');
      D = new Node('D', 'JSON');
      E = new Node('E', 'Marifel');
      F = new Node('F', 'Nigel');
      A.addNeighbors([B, C]);
      B.addNeighbors([D, E]);
      C.addNeighbors([F]);
    });

    it('should be a function that exists', () => {
      expect(breadthFirstSearch).to.exist;
      expect(breadthFirstSearch).to.be.a('function');
    });

    it('should return the traversal path from the starting point all the way to the end', () => {
      expect(breadthFirstSearch(A)).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F']);
      expect(breadthFirstSearch(B)).to.deep.equal(['B', 'D', 'E']);
      expect(breadthFirstSearch(C)).to.deep.equal(['C', 'F']);
      expect(breadthFirstSearch(D)).to.deep.equal(['D']);
      expect(breadthFirstSearch(E)).to.deep.equal(['E']);
      expect(breadthFirstSearch(F)).to.deep.equal(['F']);
    });
  });

  describe('Breadth First Search - with queue', () => {
    let A;
    let B;
    let C;
    let D;
    let E;
    let F;

    beforeEach(() => {
      A = new Node('A', 'Joe');
      B = new Node('B', 'Jon');
      C = new Node('C', 'Ray');
      D = new Node('D', 'JSON');
      E = new Node('E', 'Marifel');
      F = new Node('F', 'Nigel');
      A.addNeighbors([B, C]);
      B.addNeighbors([D, E]);
      C.addNeighbors([F]);
    });

    it('should be a function that exists', () => {
      expect(breadthFirstSearchQueue).to.exist;
      expect(breadthFirstSearchQueue).to.be.a('function');
    });

    it('should return the traversal path from the starting point all the way to the end', () => {
      // expect(breadthFirstSearchQueue(A)).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F']);
      // expect(breadthFirstSearchQueue(B)).to.deep.equal(['B', 'D', 'E']);
      // expect(breadthFirstSearchQueue(C)).to.deep.equal(['C', 'F']);
      // expect(breadthFirstSearchQueue(D)).to.deep.equal(['D']);
      // expect(breadthFirstSearchQueue(E)).to.deep.equal(['E']);
      // expect(breadthFirstSearchQueue(F)).to.deep.equal(['F']);

      expect(breadthFirstSearchQueue(A, 'Joe').value).to.equal('Joe');
      expect(breadthFirstSearchQueue(A, 'JSON').value).to.equal('JSON');
      expect(breadthFirstSearchQueue(A, 'JSON').name).to.equal('D');
      expect(breadthFirstSearchQueue(A, 'Nigel').value).to.equal('Nigel');
      expect(breadthFirstSearchQueue(A, 'Nigel').name).to.equal('F');
      expect(breadthFirstSearchQueue(B, 'Marifel').value).to.equal('Marifel');
      expect(breadthFirstSearchQueue(A, 'Marifel').name).to.equal('E');
    });
  });
});
