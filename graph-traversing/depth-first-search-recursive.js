'use strict';

/*
  1  procedure DFS(G,v):
  2      label v as discovered
  3      for all edges from v to w in G.adjacentEdges(v) do
  4          if vertex w is not labeled as discovered then
  5              recursively call DFS(G,w)
 */
const dfs = (start, searchFor) => {
  if (!searchFor || !start) {
    throw new Error('Invalid input');
  }

  //If the node we are searching for
  if (searchFor === start.getValue()) {
    return start;
  }
  let child;
  let found;
  let neighbors = start.getNeighbors();

  // iterate through all of the starting nodes neighbors
  for (let i = 0; i < neighbors.length; i++) {
    child = neighbors[i];

    //Recursviely call the child nodes until we find
    found = dfs(child, searchFor);

    // If we find the item we are searching for - return the node
    if(found){
      console.log(found)
      return found;
    }
  }
  // If we cannot find the node - return false;
  return false;
}

module.exports = dfs;

// const DFS = (start, searchFor) => {

//   if (start.value === searchFor) {
//     return start;
//   } else if (start.neighbors.length === 0) {
//     return false;
//   } else {
//     for (var i = 0; i < start.neighbors.length; i++) {
//       let result = DFS(start.neighbors[i],searchFor);

//       if (result) {
//         return result;
//       }
//     }
//   }
// }

// module.exports = DFS;
