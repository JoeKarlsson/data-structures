/**
 * Basic priority queue implementation.
 */
function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  }
  this.dequeue = function () {
    return this._nodes.shift().key;
  }
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }
  this.isEmpty = function () {
    return !this._nodes.length;
  }
}

/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  }

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let smallest, vertex, neighbor, alt;

    // Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
    for(vertex in this.vertices) {
      if(vertex === start) {
        // Set the initial node as current.
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        // Mark all other nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    // Loop through all of the nodes until we run out of nodes, or we find the node we were looking for
    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      // If the current smallest node is the node we are looking for
      if(smallest === finish) {
        path;

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      // For the current node, consider all of its unvisited neighbors and calculate their tentative distances.
      for(neighbor in this.vertices[smallest]) {

        // Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
        // For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbor B has length 2, then the distance to B (through A) will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, keep the current value.
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        // If the newly calculated tentative distance is smaller than the currently assigned value then assign the smaller one.
        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }
}

var g = new Graph();

g.addVertex('A', {B: 7, C: 8});
g.addVertex('B', {A: 7, F: 2});
g.addVertex('C', {A: 8, F: 6, G: 4});
g.addVertex('D', {F: 8});
g.addVertex('E', {H: 1});
g.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
g.addVertex('G', {C: 4, F: 9});
g.addVertex('H', {E: 1, F: 3});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(
  g.shortestPath('A', 'H')
  .concat(['A'])
  .reverse()
);

//Source: https://github.com/mburst/dijkstras-algorithm
