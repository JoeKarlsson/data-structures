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

  // If the node we are searching for
  if (searchFor === start.getValue()) {
    return start;
  }
  let child;
  let found;
  const neighbors = start.getNeighbors();

  // iterate through all of the starting nodes neighbors
  for (let i = 0; i < neighbors.length; i++) {
    child = neighbors[i];

    // Recursviely call the child nodes until we find
    found = dfs(child, searchFor);

    // If we find the item we are searching for - return the node
    if (found) {
      return found;
    }
  }
  // If we cannot find the node - return false;
  return false;
};

module.exports = dfs;
