'use strict';

const dijkstra = (graph, start) => {
  var solutions = {};
  solutions[start] = [];
  solutions[start].dist = 0;

  while(true) {

    // Initialization
    var parent = null;
    var nearest = null;
    var dist = Infinity; // Unknown distance from source to v

    //for each existing solution
    for(var n in solutions) {
      if(!solutions[n]) {
        continue;
      }

      var ndist = solutions[n].dist;
      var adj = graph[n];

      //for each of its adjacent nodes...
      for(var a in adj) {

        //without a solution already...
        if(solutions[a]){
          continue;
        }

        //choose nearest node with lowest *total* cost
        var d = adj[a] + ndist;

        // A shorter path has been found
        if(d < dist) {
          //reference parent
          parent = solutions[n];
          nearest = a;
          dist = d;
        }
      }
    }

    //no more solutions
    if(dist === Infinity) {
       break;
    }

    //extend parent's solution path
    solutions[nearest] = parent.concat(nearest);
    //extend parent's cost
    solutions[nearest].dist = dist;
  }

  return solutions;
};

//create graph
var graph = {};

var layout = {
  'R': ['2'],
  '2': ['3','4'],
  '3': ['4','6','13'],
  '4': ['5','8'],
  '5': ['7','11'],
  '6': ['13','15'],
  '7': ['10'],
  '8': ['11','13'],
  '9': ['14'],
  '10': [],
  '11': ['12'],
  '12': [],
  '13': ['14'],
  '14': [],
  '15': []
};

for(var id in layout) {
  if(!graph[id]) {
    graph[id] = {};
  }
  layout[id].forEach(function(aid) {
    graph[id][aid] = 1;
    if(!graph[aid]) {
      graph[aid] = {};
    }
    graph[aid][id] = 1;
  });
}

//choose start node
var start = '10';
//get all solutions
var solutions = dijkstra(graph, start);

console.log("From '" + start + "' to");
//display solutions
for(var s in solutions) {
  if(!solutions[s]) continue;
  console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
}