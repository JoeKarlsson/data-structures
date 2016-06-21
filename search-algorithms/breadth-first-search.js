/*
  In a breadth first search you will start at the root node.
  You will then search all their children nodes moving from left to right.
  Once all the children nodes have been searched, the process is repeated on the level below the root node.

  This process is repeated on each level until you reach the end of the tree or you reach the node that you were searching for initially.
  The image below shows you the order that you will search a tree in a breadth first search.
 */

 var Node = function(name) {
  this.name = name;
  this.neighbors = [];
}

Node.prototype.neighbors = function() {
  return this.neighbors;
}

Node.prototype.toString = function() {
  return this.name;
}

// and a sample graph:
A = new Node("A")
B = new Node("B")
C = new Node("C")
D = new Node("D")
E = new Node("E")
F = new Node("F")
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

// Here's Breadth First Search
var search_from = function (start) {
  var open = [];
  open.push(start);
  var visited_nodes = [start];
  var searched_path = [];

  while (open.length > 0) {
    var current = open.shift();
    searched_path.push(current);
    current.neighbors.forEach(function (next) {
      console.log(visited_nodes.indexOf(next))
      if (visited_nodes.indexOf(next) < 0) {
        visited_nodes.push(next);
        open.push(next);
      }
    });
  }

  return searched_path;
}

results = search_from(A);
console.log("First search from A: ", results.toString());

results = search_from(B)
console.log("Second search from B: ", results.toString())
