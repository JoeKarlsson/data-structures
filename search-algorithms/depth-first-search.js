'use strict';

const Node = require('../data-structure/treeNode');

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
  let i;
  let child;
  let found;
  let children = start.getChildren();

  // iterate through all of the starting nodes children
  for (i = 0; i < children.length; i++) {
    child = children[i];

    //Recursviely call the child nodes until we find
    found = dfs(child, searchFor);

    // If we find the item we are searching for - return the node
    if(found){
      return found;
    }
  }
  // If we cannot find the node - return false;
  return false;
}

//Sample graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);

node1.addChild(node2);
node1.addChild(node7);
node1.addChild(node8);

node2.addChild(node3);
node2.addChild(node6);

node3.addChild(node4);
node3.addChild(node5);

node8.addChild(node9);
node8.addChild(node12);

node9.addChild(node10);
node9.addChild(node11);

console.log('dfs(node1, 5): ', dfs(node1, 5));
