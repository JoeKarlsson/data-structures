# Binary Search Tree

In computer science, a binary search tree (BST), sometimes also called an ordered or sorted binary tree, is a node-based binary tree data structure where each node has a comparable key (and an associated value) and satisfies the restriction that the key in any node is larger than the keys in all nodes in that node's left subtree and smaller than the keys in all nodes in that node's right sub-tree. Each node has no more than two child nodes. Each child must either be a leaf node or the root of another binary search tree. The left sub-tree contains only nodes with keys less than the parent node; the right sub-tree contains only nodes with keys greater than the parent node. BSTs are also dynamic data structures, and the size of a BST is only limited by the amount of free memory in the operating system. The main advantage of binary search trees is that it remains ordered, which provides quicker search times than many other data structures.

!(A binary search tree of size 9 and depth 3, with 8 at the root. The leaves are not drawn)[https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/200px-Binary_search_tree.svg.png]

## Time Complexity

|        |Average   |Worst case|
|--------|----------|----------|
|Space   |Θ(n)      |O(n)      |
|Search  |Θ(log n)  |O(n)      |
|Insert  |Θ(log n)  |O(n)      |
|Delete  |Θ(log n)  |O(n)      |
