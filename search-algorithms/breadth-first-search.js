'use strict';

const Node = require('../data-structure/graphNode.js');

/*
  In a breadth first search you will start at the root node.
  You will then search all their children nodes moving from left to right.
  Once all the children nodes have been searched, the process is repeated on the level below the root node.

  This process is repeated on each level until you reach the end of the tree or you reach the node that you were searching for initially.
  The image below shows you the order that you will search a tree in a breadth first search.
 */

const bfs = (start) => {
  let open = [];
  open.push(start);
  let visited_nodes = [start];
  let searched_path = [];

  while (open.length > 0) {
    let current = open.shift();
    searched_path.push(current);
    current.neighbors.forEach((next) => {
      if (visited_nodes.indexOf(next) < 0) {
        visited_nodes.push(next);
        open.push(next);
      }
    });
  }
  return searched_path;
}

// and a sample graph:
const A = new Node("A")
const B = new Node("B")
const C = new Node("C")
const D = new Node("D")
const E = new Node("E")
const F = new Node("F")
A.neighbors = [B, C]
B.neighbors = [A, D, E]
C.neighbors = [F]
D.neighbors = []
E.neighbors = []
F.neighbors = []

// console.log('A', A);
// console.log('B', B);
// console.log('C', C);
// console.log('D', D);
// console.log('E', E);

let results = bfs(A);
console.log("First search from A: ", results.toString());

results = bfs(B)
console.log("Second search from B: ", results.toString())
