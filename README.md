# JavaScript Data Structures and Algorithms


[![deps][deps]][deps-url]
[![Coverage Status][cover]][cover-url]
[![Build Status][tests]][tests-url]
[![Maintainability][maintainability]][maintainability-url]
[![stars][stars]][stars-url]
[![pr][pr]][pr-url]
[![license][license]][license-url]
[![twitter][twitter]][twitter-url]
[![BCH-compliance][BCH-compliance]][BCH-compliance-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/JoeKarlsson/data-structures.svg)](https://greenkeeper.io/)


I put this repository together to get ready for technical interviews. I hope it helps you get ready for your next big technical interview. If you like what you see plz give it a star. Also, feel free to contribute :D

## What is an algorithm?

In simple terms, it is possible to say that an algorithm is a sequence of steps which allow to solve a certain task ( Yes, not just computers use algorithms, humans also use them). Now, an algorithm should have three important characteristics to be considered valid:

1. **It should be finite:** If your algorithm never ends trying to solve the problem it was designed to solve then it is useless

1. **It should have well defined instructions:** Each step of the algorithm has to be precisely defined; the instructions should be unambiguously specified for each case.

1. **It should be effective:** The algorithm should solve the problem it was designed to solve. And it should be possible to demonstrate that the algorithm converges with just a paper and pencil.

## Getting Started

1. Run `npm install`
1. Run `npm test` to run all of the algorithms


This repo covers the following topics:

* [Binary Heap](https://github.com/JoeKarlsson/data-structures/tree/master/binary-heap)
* [Bitwise](https://github.com/JoeKarlsson/data-structures/tree/master/bitwise)
* [Complex Arrays](https://github.com/JoeKarlsson/data-structures/tree/master/complex-array)
* [Graph Traversing](https://github.com/JoeKarlsson/data-structures/tree/master/graph-traversing)
  * [Breadth First Search](https://github.com/JoeKarlsson/data-structures/blob/master/graph-traversing/breadth-first-search.js)
  * [Depth First Search](https://github.com/JoeKarlsson/data-structures/blob/master/graph-traversing/depth-first-search-recursive.js)
* [Graph](https://github.com/JoeKarlsson/data-structures/tree/master/graph)
  * [Graph Node](https://github.com/JoeKarlsson/data-structures/blob/master/graph/graphNode.js)
  * [Grid Graph](https://github.com/JoeKarlsson/data-structures/blob/master/graph/gridGraph.js)
  * [Tree Node](https://github.com/JoeKarlsson/data-structures/blob/master/graph/tree.js)
* [Hash Table](https://github.com/JoeKarlsson/data-structures/tree/master/hash-table)
* [Fast Fourier Transformations](https://github.com/JoeKarlsson/data-structures/tree/master/fast-fourier-transforms)
* [Linked Lists](https://github.com/JoeKarlsson/data-structures/tree/master/linked-list)
* [List](https://github.com/JoeKarlsson/data-structures/tree/master/list)
* [Memoization](https://github.com/JoeKarlsson/data-structures/tree/master/memoization)
* [Queue](https://github.com/JoeKarlsson/data-structures/tree/master/queue)
  * [Prioroty Queue](https://github.com/JoeKarlsson/data-structures/blob/master/queue/priorityQueue.js)
  * [Queue](https://github.com/JoeKarlsson/data-structures/blob/master/queue/queue.js)
* [Rabin Karp](https://github.com/JoeKarlsson/data-structures/tree/master/rabin-karp)
* [Search](https://github.com/JoeKarlsson/data-structures/tree/master/search)
  * [Binary Search Trees](https://github.com/JoeKarlsson/data-structures/tree/master/search)
  * [Linear](https://github.com/JoeKarlsson/data-structures/blob/master/search/linearSearch.js)
* [Shortest Path](https://github.com/JoeKarlsson/data-structures/tree/master/queue)
  * [A*](https://github.com/JoeKarlsson/data-structures/blob/master/shortest-path/aStar.js)
  * [Dijkstra](https://github.com/JoeKarlsson/data-structures/blob/master/shortest-path/dijkstra.js)
* [Sorting](https://github.com/JoeKarlsson/data-structures/tree/master/sorting-algorithms)
  * [Bubble Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting/bubblesort.js)
  * [Insertion Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting/insertionsort.js)
  * [Merge Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting/mergesort.js)
  * [Quick Sort (duh)](https://github.com/JoeKarlsson/data-structures/blob/master/sorting/quicksort.js)
  * [Selection Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting/selectionsort.js)
* [Stack](https://github.com/JoeKarlsson/data-structures/tree/master/stack)
* [Trie](https://github.com/JoeKarlsson/data-structures/tree/master/trie)


An algorithm is a self-contained step-by-step set of operations to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.

"Elegant" (compact) programs, "good" (fast) programs : The notion of "simplicity and elegance" appears informally in Knuth and precisely in Chaitin:

Knuth: ". . .we want good algorithms in some loosely defined aesthetic sense. One criterion . . . is the length of time taken to perform the algorithm . . .. Other criteria are adaptability of the algorithm to computers, its simplicity and elegance, etc"

Chaitin: " . . . a program is 'elegant,' by which I mean that it's the smallest possible program for producing the output that it does"

### TODO:
- Timsort
- Floyd-Warshall
- Traveling Salesman
- k-way merge
- Matching users to servers, using Gayle-Shapely Algorithm for Stable Marriage problem
  - This is a beautiful algorithm for fair matching. Simple, elegant and effective. In its core form, it’s also straightforward to implement. Has numerous applications. See: Stable marriage problem - Wikipedia
- A toy implementation of Viterbi algorithm
  - Ubiquitous in cell phone technology, and many other applications, Viterbi algorithm is a Dynamic Programming based algorithm that finds the most likely sequence of states.
  - SSL transport, is the bane of safe existence on Internet these days. One of the most well-known algorithms in secure transport, is RSA, named by the first initials of its inventors. Implementing RSA is fun and instructive e.g. C code to implement RSA Algorithm(Encryption and Decryption)
- Safe Browsing (or similar) using Bloom filters
  - Bloom filters found very rare usage until the world got more online and we hit scale. But these days, we see new applications very frequently.Chrome browser uses Bloom filters to make preliminary decision on safe browsing. See some novel applications here.
- Implement an LALR parser
  - As a CS student, you may have already implemented it as part of your compiler’s class. But if not, then you should. LALR parsing makes syntactic sense of source code, whichever language you use. Many implementations of LALR exist. e.g. Where can I find a _simple_, easy to understand implementation of an LR(1) parser generator? Also, use YACC to understand LALR parsing better.
- Treemap using Red Black Trees!
  - RB Trees are not algorithms, but they are famed enough, that no discussion of tantalizing DS/Algorithms is complete without discussing them. The smoothest way to see/implement RB Trees, is to look at Treemap implementation in Java.
- Circle Drawing using Bresenham’s algorithm
  - Ever wondered, how circles are drawn on the screen, with minimal jaggedness (aliasing)? Bresenham’s elegant algorithm is at play here. See a version here: Circle Generation Algorithm . A refreshing use of a similar algorithm, is to make properly sized tabs in Chrome. Something we see almost every day. Such hidden gems!
- Implement PageRank
  - Can’t miss this. This transformed our lives in ways we never thought possible. Get started here: Pagerank Explained Correctly with Examples

## Contributing
Don't hesitate to create a pull request. Every contribution is appreciated. In development you can start the tests by calling `npm test`. Checkout our [contribution README](https://github.com/JoeKarlsson/data-structures/blob/master/CONTRIBUTING.md) for more info.

1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/JoeKarlsson?v=3">
        <br />
        <a href="https://github.com/JoeKarlsson">Joe Karlsson</a>
      </td>
    <tr>
  <tbody>
</table>

<h2 align="center">LICENSE</h2>

#### [MIT](./LICENSE)

[deps]: https://david-dm.org/JoeKarlsson/data-structures/status.svg
[deps-url]: https://david-dm.org/JoeKarlsson/data-structures

[tests]: https://travis-ci.org/JoeKarlsson/data-structures.svg?branch=master
[tests-url]: https://travis-ci.org/JoeKarlsson/data-structures

[maintainability]: https://api.codeclimate.com/v1/badges/462bdda833cde7f72e01/maintainability
[maintainability-url]: https://codeclimate.com/github/JoeKarlsson/data-structures/maintainability

[pr]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: CONTRIBUTING.md

[cover]: https://coveralls.io/repos/github/JoeKarlsson/data-structures/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/JoeKarlsson/data-structures?branch=master

[stars]: https://img.shields.io/github/stars/JoeKarlsson/data-structures.svg?style=flat-square
[stars-url]: https://github.com/JoeKarlsson/data-structures/stargazers

[license]: https://img.shields.io/github/license/JoeKarlsson/data-structures.svg
[license-url]: https://github.com/JoeKarlsson/data-structures/blob/master/LICENSE

[twitter]: https://img.shields.io/twitter/url/https/github.com/JoeKarlsson/data-structures.svg?style=social&style=flat-square
[twitter-url]: https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FJoeKarlsson%2Fdata-structures

[BCH-compliance]: https://bettercodehub.com/edge/badge/JoeKarlsson/data-structures?branch=master
[BCH-compliance-url]: https://bettercodehub.com/
