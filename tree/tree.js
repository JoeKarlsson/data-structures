'use strict';

const Node = function(value) {
  this.value = value;
  this.children = [];
};

Node.prototype.getChildren = function() {
  return this.getChildren;
};

Node.prototype.addChild = function( child ) {
  this.children.push( child );
};

Node.prototype.hasChildren = function() {
  return this.children.length > 0;
};

Node.prototype.getValue = function() {
  return this.value;
};

Node.prototype.toString = function() {
  return this.name;
};

// and a sample graph:
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);
node1.addChild(node2, node7, node8);
node2.addChild(node3, node6);
node3.addChild(node4, node5);
node8.addChild(node9, node12);
node9.addChild(node10, node11);

console.log('node1', node1);
console.log('node2', node2);
console.log('node3', node3);
