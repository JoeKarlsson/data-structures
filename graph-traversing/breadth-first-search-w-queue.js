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
  const bfsInfo = [];

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
};

module.exports = bfs;