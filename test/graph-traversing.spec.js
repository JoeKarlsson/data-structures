const chai = require('chai');
const expect = chai.expect;

const Node = require('../graph/graphNode');
const BFS = require('../graph-traversing/breadth-first-search');
const DFS_Recursive = require('../graph-traversing/depth-first-search-recursive');
const DFS_Imperative = require('../graph-traversing/depth-first-search-imperative');

describe('Recursive Depth First Search', () => {
  let A;
  let B;
  let C;
  let D;
  let E;
  let F;

  beforeEach(() => {
    A = new Node("A", "Joe");
    B = new Node("B", "Jon");
    C = new Node("C", "Ray");
    D = new Node("D", "JSON");
    E = new Node("E", "Marifel");
    F = new Node("F", "Nigel");
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
  });

  it('should be a function that exists', () => {
    expect(DFS_Recursive).to.exist;
    expect(DFS_Recursive).to.be.a('function');
  });

  it('should return the node with the value of `searchFor` stored in its value property', () => {
    expect(DFS_Recursive(A, "Joe").value).to.equal("Joe");
    expect(DFS_Recursive(A, "D").value).to.equal("JSON");
    expect(DFS_Recursive(A, "D").name).to.equal("D");
    expect(DFS_Recursive(A, "F").value).to.equal("Nigel");
    expect(DFS_Recursive(A, "F").name).to.equal("F");
    expect(DFS_Recursive(B, "E").value).to.equal("Marifel");
    expect(DFS_Recursive(A, "E").name).to.equal("E");
  });

  it('should return false if it cant find the value in the graph', () => {
    expect(DFS_Recursive(F, "Joe")).to.equal(false);
    expect(DFS_Recursive(E, "Joe")).to.equal(false);
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
    A = new Node("A", "Joe");
    B = new Node("B", "Jon");
    C = new Node("C", "Ray");
    D = new Node("D", "JSON");
    E = new Node("E", "Marifel");
    F = new Node("F", "Nigel");
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
  });

  it('should be a function that exists', () => {
    expect(DFS_Imperative).to.exist;
    expect(DFS_Imperative).to.be.a('function');
  });

  it('should return the node with the value of `searchFor` stored in its value property', () => {
    expect(DFS_Imperative(A, "D").value).to.equal("JSON");
    expect(DFS_Imperative(A, "D").name).to.equal("D");
    expect(DFS_Imperative(A, "F").value).to.equal("Nigel");
    expect(DFS_Imperative(A, "F").name).to.equal("F");
    expect(DFS_Imperative(B, "E").value).to.equal("Marifel");
    expect(DFS_Imperative(A, "E").name).to.equal("E");
  });

  it('should return false if it cant find the value in the graph', () => {
    expect(DFS_Imperative(F, "Joe")).to.equal(false);
    expect(DFS_Imperative(E, "Joe")).to.equal(false);
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
    A = new Node("A", "Joe");
    B = new Node("B", "Jon");
    C = new Node("C", "Ray");
    D = new Node("D", "JSON");
    E = new Node("E", "Marifel");
    F = new Node("F", "Nigel");
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
  });

  it('should be a function that exists', () => {
    expect(BFS).to.exist;
    expect(BFS).to.be.a('function');
  });

  it('should return the traversal path from the starting point all the way to the end', () => {
    expect(BFS(A)).to.deep.equal(["A","B","C","D","F"]);
    expect(BFS(B)).to.deep.equal(["B","D","E"]);
    expect(BFS(C)).to.deep.equal(["C","F"]);
    expect(BFS(D)).to.deep.equal(["D"]);
    expect(BFS(E)).to.deep.equal(["E"]);
    expect(BFS(F)).to.deep.equal(["F"]);
  });
});