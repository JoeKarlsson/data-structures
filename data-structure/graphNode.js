const Node = function(name) {
  this.name = name;
  this.neighbors = [];
}

Node.prototype.neighbors = function() {
  return this.neighbors;
}

Node.prototype.toString = function() {
  return this.name;
}

module.exports = Node;

// and a sample graph:
// A = new Node("A")
// B = new Node("B")
// C = new Node("C")
// D = new Node("D")
// E = new Node("E")
// F = new Node("F")
// A.neighbors = [B, C]
// B.neighbors = [A, D, E]
// C.neighbors = [F]
// D.neighbors = []
// E.neighbors = []
// F.neighbors = []

// console.log('A', A);
// console.log('B', B);
// console.log('C', C);
// console.log('D', D);
// console.log('E', E);