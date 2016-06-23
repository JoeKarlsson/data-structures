'use strict';

/**
 * The single node of the tree
 * @param {number} key  The key of the node
 * @param {*} value The value to store in the node.
 */
function BSNode( key, value ) {
  this.value = value;
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

function BSTree() {
  this.root = null;
};

/**
 * Iterative solution for Binary Search Tree insert method
 * @param  {number} key  The key to store
 * @param  {*} value The data being stored
 * @return {[type]}      [description]
 */
BSTree.prototype.insert = function (key, value) {
  var node = new BSNode(key, value);
  var p = this.root;

  //Special case: If BST is empty
  if (!p) {
    this.root = node;
  }
  // Loop through all of the nodes
  for (var n = this.root; n;) {
    p = n;

    // If the key you are adding is less than the current nodes value, move to the left, else right.
    if (key < n.key) {
      n = n.left;
    }
    else {
      n = n.right;
    }
  };
  node.parent = p;
  // Once you have found your place - drop the node off
  if (key < p.key){
    p.left = node;
  } else {
    p.right = node;
  }
};

/**
 * Search for the item stored at the key starting from Node
 * @param  {number} key  Key that will be searched
 * @param  {BSTNode} node Node from which you will start the search
 * @return {*}      The value stored at the node or undefined if the node cannot be located
 */
BSTree.prototype.search = function ( key, node ) {

}

let bst = new BSTree();
bst.insert(2, 'turtle');
bst.insert(1, 'cat');
bst.insert(3, 'dog');
console.log('bst: ', bst);