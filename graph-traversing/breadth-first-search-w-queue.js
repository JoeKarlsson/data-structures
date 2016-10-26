'use strict';

const Node = require('../tree/treeNode');
const queueGenerator = require('../queue/queue');

 /*
   * Performs a breadth-first search on a graph
   * @param {array} graph - Graph, represented as adjacency lists.
   * @param {number} source - The index of the source vertex.
   * @returns {array} Array of objects describing each vertex, like
   *     [{distance: _, predecessor: _ }]
*/
const bfs = (graph, source) => {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  let queue = queueGenerator();
  queue.enqueue(source);

  // Traverse the graph

  // As long as the queue is not empty:
  //  Repeatedly dequeue a vertex u from the queue.
  //
  //  For each neighbor v of u that has not been visited:
  //     Set distance to 1 greater than u's distance
  //     Set predecessor to u
  //     Enqueue v
  //
  //  Hint:
  //  use graph to get the neighbors,
  //  use bfsInfo for distances and predecessors

  while(!queue.isEmpty()){
    let vertex= queue.dequeue();

    for(let i=0; i<vertex.length; i++){
      let  neighbour = graph[vertex][i];

      if(bfsInfo[neighbour].distance===null){
          bfsInfo[neighbour].distance+=1;
          bfsInfo[neighbour].predecessor=vertex;
          queue.enqueue(neighbour);
      }
    }
  }
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

console.log('bfs(node1, 5): ', bfs(node1, 5));