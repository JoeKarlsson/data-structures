const DFS = (start, searchFor) => {
  const stack = [start];
  const visited = [];
  let currNode = start;

  while ( stack.length !== 0) {
    currNode = stack.pop();
    if (currNode.value === searchFor) {
      return currNode;
    }
    if (visited.indexOf(currNode) === -1) {
      visited.push(currNode);
      currNode.neighbors.forEach((w) => {
        stack.push(w);
      });
    }
  }

  if (stack.length === 0) {
    return false;
  }
};

module.exports = DFS;
