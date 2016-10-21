/*
  There are three functions that we keep track of for nodes that we look at:

  g(x): The total cost of getting to that node (pretty straightforward). If we reach a node for the first time or reach a node in less time than it currently took, then update the g(x) to the cost to reach this node.
  h(x): The estimated time to reach the finish from the current node. This is also called a heuristic. We online need to update this if it is not set already, since the distance to the finish will not change even if the path we took to arrive at a node changes. Note: There are many different ways to guess how far you are from the end, I use the Manhattan distance in this implementation.
  f(x): Simply g(x) + h(x). The lower the f(x), the better. Think about it like this: the best node is one that takes the least total amount of time to arrive at and to get to the end. So, a node that took only 1 step to arrive at and 5 to get to the end is more ideal than one that took 10 to arrive and and only 1 to get to the end.
 */
const init = (grid) => {
  for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      grid[x][y].f = 0;
      grid[x][y].g = 0;
      grid[x][y].h = 0;
      grid[x][y].debug = "";
      grid[x][y].parent = null;
    }
  }
}

const aStar = (start, goal) {
  // The set of nodes already evaluated.
  let closedSet = [];

  // The set of currently discovered nodes still to be evaluated.
  // Initially, only the start node is known
  let openSet = [start];

  // while open Set is not empty
  while(openSet.length > 0) {
    // Grab the lowest f(x) to process next

  }

}

// http://theory.stanford.edu/~amitp/GameProgramming/ImplementationNotes.html
// http://www.briangrinstead.com/blog/astar-search-algorithm-in-javascript/
// https://github.com/bgrins/javascript-astar/blob/master/astar.js
// https://en.wikipedia.org/wiki/A*_search_algorithm