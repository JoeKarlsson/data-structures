const LinkedList = require('../linked-list/linkedList');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  makeNode(value) {
    const node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
  }

  add(value) {
    const currentNode = this.makeNode(value);
    if (!this.root) {
      this.root = currentNode;
    } else {
      this.insert(currentNode);
    }
    return this.root;
  }

  // Find and insert a new node in the BST
  insert(currentNode) {
    const value = currentNode.value;

    const traverse = (node) => {
      if (value > node.value) {
        if (!node.right) {
          node.right = currentNode;
          return;
        }
        traverse(node.right);
      } else if (value < node.value) {
        if (!node.left) {
          node.left = currentNode;
          return;
        }
        traverse(node.left);
      }
    };
    traverse(this.root);
  }

  // Find and return the node based on it's value
  get(start, searchFor, parent = null, isLeft = true) {
    if (!start.value) {
      return null; // key not found
    }
    if ( searchFor < start.value ) {
      return this.get( start.left, searchFor, start, true );
    } else if ( searchFor > start.value ) {
      return this.get( start.right, searchFor, start, false );
    } else { // key is equal to node key
      return {
        current: start,
        parent,
        isLeft,
      };
    }
  }

  remove(value) {
    let found = false;
    let childCount;
    let replacement;
    let replacementParent;

    // find the node
    const {
      current,
      parent,
      isLeft,
    } = this.get(this.root, value);

    if (current) {
      found = true;
    }
    // only proceed if the node was found
    if (found) {
      // Figure out how many children
      childCount = (current.left !== null ? 1 : 0) +
                   (current.right !== null ? 1 : 0);
      // special case: the value is at the root
      if (current === this.root) {
        switch (childCount) {
          // two children, little work to do
          case 2:
            // new root will be the old root's left child
            // ...maybe
            replacement = this.root.left;
            // find the right-most leaf node to be
            // the real new root
            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }
            // it's not the first node on the left
            if (replacementParent !== null) {
              // remove the new root from it's
              // previous position
              replacementParent.right = replacement.left;
              // give the new root all of the old
              // root's children
              replacement.right = this.root.right;
              replacement.left = this.root.left;
            } else {
              // just assign the children
              replacement.right = this.root.right;
            }
            // officially assign new root
            this.root = replacement;
            break;
          // no default
        }

      // non-root values
      } else {
        switch (childCount) {
          // Leaf Node
          case 0:
            if (isLeft) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;
          // 1 child
          case 1:
            if ( isLeft ) {
              parent.left = current.left;
            } else {
              parent.right = current.left;
            }
            break;

          // two children, a bit more complicated - we need to determine
          // replacement node
          case 2:
            // reset pointers for new traversal
            replacement = current.left;
            replacementParent = current;

            // find the right-most node
            while ( replacement.right !== null ) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            replacementParent.right = replacement.left;

            // assign children to the replacement
            replacement.right = current.right;
            replacement.left = current.left;

            // place the replacement in the right spot
            if (current.value < parent.value) {
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }
            break;

          // no default
        }
      }
    }
  }

  contains(value) {
    const node = this.root;
    const traverse = ( node ) => {
      if (!node) {
        return false;
      }
      if ( value === node.value ) {
        return true;
      } else if ( value > node.value ) {
        return traverse(node.right);
      } else if ( value < node.value ) {
        return traverse( node.left );
      }
    };
    return traverse( node );
  }

  // find the left most node to find the min value of a binary tree;
  findMin() {
    const node = this.root;
    const traverse = ( node ) => {
      return !node.left ? node.value : traverse( node.left );
    };
    return traverse(node);
  }

  // find the right most node to find the max value of a binary tree;
  findMax() {
    const node = this.root;
    const traverse = ( node ) => {
      return !node.right ? node.value : traverse( node.right );
    };
    return traverse( node );
  }

  getDepth() {
    let maxDepth = 0;
    const node = this.root;
    const traverse = (node, depth) => {
      if ( !node ) return null;
      if ( node ) {
        maxDepth = depth > maxDepth ? depth : maxDepth;
        traverse( node.left, depth + 1 );
        traverse( node.right, depth + 1 );
      }
    };
    traverse( node, 0 );
    return maxDepth;
  }

  countLeaves() {
    let count = 0;
    const node = this.root;
    const traverse = ( node ) => {
      if ( !node) {
        return null;
      }
      if ( !node.left && !node.right ) {
        count++;
      } else {
        traverse(node.left) + traverse(node.right);
      }
    };
    traverse(node);
    return count;
  }

  // Find the averages of all nodes on at each depth
  nodeAverages() {
    const node = this.root;
    const result = {};
    const depthAverages = [];

    const traverse = ( node, depth ) => {
      if ( !node ) {
        return null;
      }
      if ( node ) {
        if ( !result[depth] ) {
          result[depth] = [node.value];
        } else {
          result[depth].push( node.value );
        }
      }
      // check to see if node is a leaf, depth stays the same if it is
      // otherwise increment depth for possible right and left nodes
      if ( node.right || node.left ) {
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
      }
    };
    traverse(node, 0);

    // get averages and breadthFirst
    for ( let key in result ) {
      const len = result[key].length;
      let depthAvg = 0;
      for ( let i = 0; i < len; i++ ) {
        depthAvg += result[key][i];
      }
      depthAverages.push( Number( ( depthAvg / len ).toFixed( 2 ) ) );
    }
    return depthAverages;
  }

  /* BREADTH FIRST TREE TRAVERSAL */

  /* Breadth First Search finds all the siblings at each level
     in order from left to right or from right to left. */
  breadthFirstLTR() {
    let node = this.root;
    const queue = [node];
    const result = [];
    while (node) {
      result.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      node = queue.shift();
    }
    return result;
  }

  breadthFirstRTL() {
    let node = this.root;
    const queue = [node];
    const result = [];
    while (node) {
      result.push(node.value);
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
      node = queue.shift();
    }
    return result;
  }

  /* DEPTH FIRST TRAVERSALS */

  /*  preOrder is a type of depth-first traversal that tries
      togo deeper in the tree before exploring siblings. It
      returns the shallowest descendants first.

      1) Display the data part of root element (or current element)
      2) Traverse the left subtree by recursively calling the pre-order function.
      3) Traverse the right subtree by recursively calling the pre-order function. */
  preOrder() {
    const result = [];
    const node = this.root;
    const traverse = ( node ) => {
      result.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };
    traverse(node);
    return result;
  }

  /*  inOrder traversal is a type of depth-first traversal
      that also tries to go deeper in the tree before exploring siblings.
      however, it returns the deepest descendents first

      1) Traverse the left subtree by recursively calling the pre-order function.
      2) Display the data part of root element (or current element)
      3) Traverse the right subtree by recursively calling the pre-order function. */
  inOrder() {
    const result = [];
    const node = this.root;
    const traverse = ( node ) => {
      node.left && traverse(node.left);
      result.push(node.value);
      node.right && traverse(node.right);
    };
    traverse(node);
    return result;
  }

  /*  postOrder traversal is a type of depth-first traversal
      that also tries to go deeper in the tree before exploring siblings.
      however, it returns the deepest descendents first

      1) Traverse the left subtree by recursively calling the pre-order function.
      2) Display the data part of root element (or current element)
      3) Traverse the right subtree by recursively calling the pre-order function. */
  postOrder() {
    const result = [];
    const node = this.root;
    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.value);
    };
    traverse(node);
    return result;
  }

  // Convert a binary search tree to a linked-list in place.
  convertToLinkedList() {
    const node = this.root;
    if ( !node ) {
      return null;
    }
    const list = new LinkedList();
    const result = this.inOrder( node );

    for ( let i = 0; i < result.length; i++) {
      list.add( result[i] );
    }
    return list;
  }
}

module.exports = BinarySearchTree;
