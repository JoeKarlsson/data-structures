const chai = require('chai');
const Graph = require('../shortest-path/dijkstra');
const GridGraph = require('../graph/gridGraph');
const astar = require('../shortest-path/aStar');

const { expect } = chai;

describe( 'Shortest Path', () => {
  describe( 'Dijkstra', () => {
    describe( '`shortestPath` method', () => {
      let g;

      beforeEach(() => {
        g = new Graph();

        g.addVertex('A', {
          B: 7,
          C: 8,
        });
        g.addVertex('B', {
          A: 7,
          F: 2,
        });
        g.addVertex('C', {
          A: 8,
          F: 6,
          G: 4,
        });
        g.addVertex('D', {
          F: 8,
        });
        g.addVertex('E', {
          H: 1,
        });
        g.addVertex('F', {
          B: 2,
          C: 6,
          D: 8,
          G: 9,
          H: 3,
        });
        g.addVertex('G', {
          C: 4,
          F: 9,
        });
        g.addVertex('H', {
          E: 1,
          F: 3,
        });
      });

      it( 'should return array of the shortest path', () => {
        const shortestPath = g.shortestPath('A', 'H')
          .concat(['A'])
          .reverse();

        expect(shortestPath).to.deep.equal(['A', 'B', 'F', 'H']);
      });
    });
  });
  describe( 'A Star', () => {
    const pathToString = (result) => result.map((node) => `(${node.x},${node.y})`).join('');

    const runSearch = (gridGraph, start, end, options) => {
      if (!(gridGraph instanceof GridGraph)) {
        gridGraph = new Graph(gridGraph);
      }
      start = gridGraph.grid[start[0]][start[1]];
      end = gridGraph.grid[end[0]][end[1]];
      const sTime = new Date();
      const result = astar.search(gridGraph, start, end, options);
      const eTime = new Date();

      return {
        result,
        text: pathToString(result),
        time: (eTime - sTime),
      };
    };

    const gridGraph = new GridGraph([
      [1, 1, 0, 1],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
    ]);
    // '(0,1)(1,1)(1,2)(2,2)(2,3)'
    const result = runSearch(gridGraph, [0, 0], [2, 3]);

    it( 'should return array of the shortest path', () => {
      expect(result.text).to.equal('(0,1)(1,1)(1,2)(2,2)(2,3)');
    });
  });
});
