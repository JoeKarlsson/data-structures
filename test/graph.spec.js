const chai = require('chai');
const expect = chai.expect;
const Node = require('../graph/graphNode');

describe('Graphs', () => {
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
  });

  it('should be a function that exists', () => {
    expect(Node).to.exist;
    expect(Node).to.be.a('function');
  });

  it('Creating a new Node should return an object', () => {
    expect(A).to.exist;
    expect(A).to.be.an('object');
  });

  it('Node should have a property `name`', () => {
    expect(A.name).to.exist;
    expect(B.name).to.exist;
    expect(C.name).to.exist;
    expect(A.name).to.be.an('String');
    expect(B.name).to.be.an('String');
    expect(C.name).to.be.an('String');
    expect(A.name).to.equal('A');
    expect(B.name).to.equal('B');
    expect(C.name).to.equal('C');
  });

  it('Node should have a property `value`', () => {
    expect(A.value).to.exist;
    expect(B.value).to.exist;
    expect(C.value).to.exist;
    expect(A.value).to.equal('Joe');
    expect(B.value).to.equal('Jon');
    expect(C.value).to.equal('Ray');
  });

  it('Node should have a property `neighbors`', () => {
    expect(A.neighbors).to.exist;
    expect(B.neighbors).to.exist;
    expect(C.neighbors).to.exist;
    expect(D.neighbors).to.exist;
    expect(E.neighbors).to.exist;
    expect(F.neighbors).to.exist;
  });

  it('Node property `neighbors` should be initialized to an empty array', () => {
    expect(A.neighbors).to.be.an('Array');
    expect(B.neighbors).to.be.an('Array');
    expect(C.neighbors).to.be.an('Array');
    expect(A.neighbors).to.deep.equal([]);
    expect(B.neighbors).to.deep.equal([]);
    expect(C.neighbors).to.deep.equal([]);
  });

  it('Node should have a method `addNeighbors`', () => {
    expect(A.addNeighbors()).to.exist;
    expect(B.addNeighbors()).to.exist;
    expect(C.addNeighbors()).to.exist;
  });

  it('Node method `addNeighbors` should return an array', () => {
    expect(A.addNeighbors([])).to.be.an('Array');
    expect(B.addNeighbors([])).to.be.an('Array');
    expect(C.addNeighbors([])).to.be.an('Array');
  });

  it('Node method `addNeighbors` should return an array of Nodes', () => {
    A.addNeighbors([B,C])
    expect(A.neighbors[0].name).to.equal('B');
    expect(A.neighbors[0].value).to.equal('Jon');
    expect(A.neighbors[1].name).to.equal('C');
    expect(A.neighbors[1].value).to.equal('Ray');

    A.addNeighbors([D,E])
    expect(A.neighbors[0].name).to.equal('B');
    expect(A.neighbors[0].value).to.equal('Jon');
    expect(A.neighbors[1].name).to.equal('C');
    expect(A.neighbors[1].value).to.equal('Ray');
    expect(A.neighbors[2].name).to.equal('D');
    expect(A.neighbors[2].value).to.equal('JSON');
    expect(A.neighbors[3].name).to.equal('E');
    expect(A.neighbors[3].value).to.equal('Marifel');
  });

  it('Node should have a method `getNeighbors`', () => {
    expect(A.getNeighbors()).to.exist;
    expect(B.getNeighbors()).to.exist;
    expect(C.getNeighbors()).to.exist;
    expect(A.getNeighbors()).to.be.an('Array');
    expect(B.getNeighbors()).to.be.an('Array');
    expect(C.getNeighbors()).to.be.an('Array');
    expect(A.getNeighbors()).to.deep.equal([]);
    expect(B.getNeighbors()).to.deep.equal([]);
    expect(B.getNeighbors()).to.deep.equal([]);
  });

  it('Node `neighbors` should refernce other neighbors', () => {
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
    expect(A.neighbors[0].name).to.equal('B');
    expect(A.neighbors[0].value).to.equal('Jon');
    expect(A.neighbors[0].neighbors[0].name).to.equal('D');
    expect(A.neighbors[1].name).to.equal('C');
    expect(A.neighbors[1].value).to.equal('Ray');
    expect(A.neighbors[1].neighbors[0].name).to.equal('F');
    expect(B.neighbors[0].name).to.equal('D');
    expect(B.neighbors[0].value).to.equal('JSON');
    expect(B.neighbors[0].neighbors).to.deep.equal([]);
    expect(B.neighbors[1].name).to.equal('E');
    expect(B.neighbors[1].value).to.equal('Marifel');
    expect(B.neighbors[1].neighbors).to.deep.equal([]);
  });
});
