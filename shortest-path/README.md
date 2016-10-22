# Shortest Path

### Dijkstra's
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later

![dijkstra_animation](https://cloud.githubusercontent.com/assets/4650739/19616580/b6f12870-97b2-11e6-9bda-a7967f60cf2b.gif)

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

### A*
In computer science, A* (pronounced as "A star" ( listen)) is a computer algorithm that is widely used in pathfinding and graph traversal, the process of plotting an efficiently traversable path between multiple points, called nodes. Noted for its performance and accuracy, it enjoys widespread use. However, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance,[1] although other work has found A* to be superior to other approaches.

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