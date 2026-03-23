import { expect } from 'chai';
import Graph from '../shortest-path/dijkstra.js';
import GridGraph from '../graph/gridGraph.js';
import astar from '../shortest-path/aStar.js';

describe('Shortest Path', () => {
  describe('Dijkstra', () => {
    describe('`shortestPath` method', () => {
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

      it('should return array of the shortest path', () => {
        const shortestPath = g.shortestPath('A', 'H').concat(['A']).reverse();

        expect(shortestPath).to.deep.equal(['A', 'B', 'F', 'H']);
      });
    });
  });

  describe('A Star', () => {
    const pathToString = result =>
      result.map(node => `(${node.x},${node.y})`).join('');

    const runSearch = (gridGraph, start, end, options) => {
      if (!(gridGraph instanceof GridGraph)) {
        gridGraph = new GridGraph(gridGraph);
      }
      start = gridGraph.grid[start[0]][start[1]];
      end = gridGraph.grid[end[0]][end[1]];
      const result = astar.search(gridGraph, start, end, options);

      return {
        result,
        text: pathToString(result),
      };
    };

    it('should return array of the shortest path', () => {
      const gridGraph = new GridGraph([
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
      ]);
      const result = runSearch(gridGraph, [0, 0], [2, 3]);
      expect(result.text).to.equal('(0,1)(1,1)(1,2)(2,2)(2,3)');
    });

    it('should return empty array when no path exists', () => {
      const gridGraph = new GridGraph([
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 1],
      ]);
      const result = runSearch(gridGraph, [0, 0], [2, 2]);
      expect(result.result).to.deep.equal([]);
    });

    it('should handle diagonal movement', () => {
      const gridGraph = new GridGraph(
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        { diagonal: true }
      );
      const result = runSearch(gridGraph, [0, 0], [2, 2]);
      // With diagonal, can go directly diagonal
      expect(result.result.length).to.be.lessThan(5);
    });

    it('should use diagonal heuristic when specified', () => {
      const gridGraph = new GridGraph(
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        { diagonal: true }
      );
      const result = runSearch(gridGraph, [0, 0], [2, 2], {
        heuristic: astar.heuristics.diagonal,
      });
      expect(result.result.length).to.be.greaterThan(0);
    });

    it('should return closest path when closest option is true and target unreachable', () => {
      const gridGraph = new GridGraph([
        [1, 1, 0],
        [1, 0, 0],
        [0, 0, 1],
      ]);
      const result = runSearch(gridGraph, [0, 0], [2, 2], { closest: true });
      // Should return a path to the closest reachable node
      expect(result.result.length).to.be.greaterThan(0);
    });

    it('should handle walls (weight 0)', () => {
      const gridGraph = new GridGraph([
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]);
      const result = runSearch(gridGraph, [0, 0], [0, 2]);
      // Must go around the wall
      expect(result.text).to.include('(2,');
    });

    describe('heuristics', () => {
      it('manhattan heuristic should calculate correct distance', () => {
        const pos0 = { x: 0, y: 0 };
        const pos1 = { x: 3, y: 4 };
        expect(astar.heuristics.manhattan(pos0, pos1)).to.equal(7);
      });

      it('diagonal heuristic should calculate correct distance', () => {
        const pos0 = { x: 0, y: 0 };
        const pos1 = { x: 3, y: 3 };
        const distance = astar.heuristics.diagonal(pos0, pos1);
        // Diagonal distance for equal x and y should be approximately 3 * sqrt(2)
        expect(distance).to.be.closeTo(3 * Math.sqrt(2), 0.01);
      });
    });

    describe('cleanNode', () => {
      it('should reset node properties', () => {
        const node = {
          f: 10,
          g: 5,
          h: 5,
          visited: true,
          closed: true,
          parent: { x: 0, y: 0 },
        };
        astar.cleanNode(node);
        expect(node.f).to.equal(0);
        expect(node.g).to.equal(0);
        expect(node.h).to.equal(0);
        expect(node.visited).to.equal(false);
        expect(node.closed).to.equal(false);
        expect(node.parent).to.be.null;
      });
    });
  });

  describe('GridGraph', () => {
    describe('constructor', () => {
      it('should create grid from 2D array', () => {
        const graph = new GridGraph([
          [1, 2],
          [3, 4],
        ]);
        expect(graph.grid.length).to.equal(2);
        expect(graph.grid[0].length).to.equal(2);
        expect(graph.nodes.length).to.equal(4);
      });

      it('should support diagonal option', () => {
        const graph = new GridGraph([[1]], { diagonal: true });
        expect(graph.diagonal).to.equal(true);
      });
    });

    describe('neighbors', () => {
      it('should return cardinal neighbors', () => {
        const graph = new GridGraph([
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ]);
        const centerNode = graph.grid[1][1];
        const neighbors = graph.neighbors(centerNode);
        expect(neighbors.length).to.equal(4);
      });

      it('should return diagonal neighbors when enabled', () => {
        const graph = new GridGraph(
          [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
          ],
          { diagonal: true }
        );
        const centerNode = graph.grid[1][1];
        const neighbors = graph.neighbors(centerNode);
        expect(neighbors.length).to.equal(8);
      });

      it('should handle corner nodes', () => {
        const graph = new GridGraph([
          [1, 1],
          [1, 1],
        ]);
        const cornerNode = graph.grid[0][0];
        const neighbors = graph.neighbors(cornerNode);
        expect(neighbors.length).to.equal(2);
      });
    });

    describe('toString', () => {
      it('should return string representation of grid', () => {
        const graph = new GridGraph([
          [1, 2],
          [3, 4],
        ]);
        const str = graph.toString();
        expect(str).to.include('1');
        expect(str).to.include('4');
      });
    });

    describe('markDirty and cleanDirty', () => {
      it('should track and clean dirty nodes', () => {
        const graph = new GridGraph([
          [1, 1],
          [1, 1],
        ]);
        const node = graph.grid[0][0];
        node.visited = true;

        graph.markDirty(node);
        expect(graph.dirtyNodes.length).to.equal(1);

        graph.cleanDirty();
        expect(graph.dirtyNodes.length).to.equal(0);
        expect(node.visited).to.equal(false);
      });
    });

    describe('GridNode', () => {
      it('should calculate cost correctly', () => {
        const graph = new GridGraph([
          [2, 2],
          [2, 2],
        ]);
        const node = graph.grid[1][1];
        // Cardinal move cost
        expect(node.getCost(graph.grid[0][1])).to.equal(2);
        // Diagonal move cost (weight * sqrt(2))
        expect(node.getCost(graph.grid[0][0])).to.be.closeTo(
          2 * 1.41421,
          0.001
        );
      });

      it('should identify walls', () => {
        const graph = new GridGraph([
          [1, 0],
          [1, 1],
        ]);
        expect(graph.grid[0][1].isWall()).to.equal(true);
        expect(graph.grid[0][0].isWall()).to.equal(false);
      });

      it('should have toString method', () => {
        const graph = new GridGraph([[1]]);
        const node = graph.grid[0][0];
        expect(node.toString()).to.equal('[0 0]');
      });
    });
  });
});
