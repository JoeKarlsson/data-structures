const PriorityQueue = require('../queue/priority-queue');

/**
 * Pathfinding starts here
 */
class Graph {
  constructor() {
    this.INFINITY = 1 / 0;
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges;
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    let vertex;
    let neighbor;
    let alt;

    // Assign to every node a tentative distance value:
    // set it to zero for our initial node and to infinity
    // for all other nodes.
    for (vertex in this.vertices) {
      if (vertex === start) {
        // Set the initial node as current.
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        // Mark all other nodes unvisited.
        // Create a set of all the unvisited nodes
        // called the unvisited set.
        distances[vertex] = this.INFINITY;
        nodes.enqueue(this.INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    // Loop through all of the nodes until we run out of nodes,
    // or we find the node we were looking for
    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      // If the current smallest node is the node we are looking for
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (!smallest || distances[smallest] === this.INFINITY) {
        continue;
      }

      // For the current node, consider all of its unvisited
      // neighbors and calculate their tentative distances.
      for (neighbor in this.vertices[smallest]) {

        // Compare the newly calculated tentative distance to the
        // current assigned value and assign the smaller one.
        // For example, if the current node A is marked with a
        // distance of 6, and the edge connecting it with a
        // neighbor B has length 2,
        // then the distance to B (through A) will be 6 + 2 = 8.
        // If B was previously marked with a distance greater than 8 then change it to 8.
        // Otherwise, keep the current value.
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        // If the newly calculated tentative distance is smaller
        // than the currently assigned value then assign the smaller one.
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }
}

// Source: https://github.com/mburst/dijkstras-algorithm

module.exports = Graph;
