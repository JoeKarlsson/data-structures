# Shortest Path

## Dijkstra's
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later

![dijkstra_animation](https://cloud.githubusercontent.com/assets/4650739/19616580/b6f12870-97b2-11e6-9bda-a7967f60cf2b.gif)

### Alogrithm:
Let the node at which we are starting be called the initial node. Let the distance of node Y be the distance from the initial node to Y. Dijkstra's algorithm will assign some initial distance values and will try to improve them step by step.

1. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
1. Set the initial node as current. Mark all other nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
1. For the current node, consider all of its unvisited neighbors and calculate their tentative distances. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbor B has length 2, then the distance to B (through A) will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, keep the current value.
1. When we are done considering all of the neighbors of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.
1. If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.
1. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.

### Pseudocode
```
function Dijkstra(Graph, source):
  create vertex set Q

  for each vertex v in Graph:             // Initialization
    dist[v] ← INFINITY                  // Unknown distance from source to v
    prev[v] ← UNDEFINED                 // Previous node in optimal path from source
    add v to Q                          // All nodes initially in Q (unvisited nodes)

  dist[source] ← 0                        // Distance from source to source

  while Q is not empty:
    u ← vertex in Q with min dist[u]    // Source node will be selected first
    remove u from Q

    for each neighbor v of u:           // where v is still in Q.
        alt ← dist[u] + length(u, v)
        if alt < dist[v]:               // A shorter path to v has been found
            dist[v] ← alt
            prev[v] ← u

  return dist[], prev[]
```

## A*
In computer science, A* (pronounced as "A star") is a computer algorithm that is widely used in pathfinding and graph traversal, the process of plotting an efficiently traversable path between multiple points, called nodes. Noted for its performance and accuracy, it enjoys widespread use. However, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance, although other work has found A* to be superior to other approaches.

### Pseudocode
```
push startNode onto openList
  while(openList is not empty) {
     currentNode = find lowest f in openList
     if currentNode is final, return the successful path
     push currentNode onto closedList and remove from openList
     foreach neighbor of currentNode {
         if neighbor is not in openList {
                save g, h, and f then save the current parent
                add neighbor to openList
         }
         if neighbor is in openList but the current g is better than previous g {
                 save g and f, then save the current parent
         }
     }
```
