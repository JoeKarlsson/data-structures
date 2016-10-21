'use strict';

const Node = require('../graph/graphNode.js');

/*
  In a breadth first search you will start at the root node.
  You will then search all their children nodes moving from left to right.
  Once all the children nodes have been searched, the process is repeated on the level below the root node.

  This process is repeated on each level until you reach the end of the tree or you reach the node that you were searching for initially.
  The image below shows you the order that you will search a tree in a breadth first search.
 */

const bfs = (start) => {
  // initailize the open to be the nodes we are currently exploring
  let open = [];
  open.push(start);

  // Keep track of the nodes we have already visited, so we don't repeat nodes
  let visited_nodes = [start];
  let searched_path = [];

  // Keep checking nodes until our open array is empty
  while (open.length > 0) {

    // Pull the first item off of our queue
    let current = open.shift();

    // Add the current node to our search path stack
    searched_path.push(current);

    //Iterate through all of the neighbors of the current node
    current.neighbors.forEach((next) => {

      // If we haven't already visisted a node, add it to our visisted stack, and add it to our open queue
      if (visited_nodes.indexOf(next) < 0) {
        visited_nodes.push(next);
        open.push(next);
      }
    });
  }

  //Once we have traversed the whole graph - return the search path
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
B.neighbors = [ D, E]
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
