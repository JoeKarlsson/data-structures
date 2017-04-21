const chai = require('chai');
const LinearSearch = require('../search/linearSearch');
const BinarySearchTree = require('../search/binary-search-tree');

const { expect } = chai;

describe( 'Search', () => {
  describe( 'Binary Search', () => {
    let bst1;
    let bst2;

    beforeEach(() => {
      bst1 = new BinarySearchTree();
      bst2 = new BinarySearchTree();
    });
    describe( '`add` method', () => {
      it( 'should add a new node to the tree', () => {
        expect(bst1.add(40)).to.deep.equal({
          value: 40,
          left: null,
          right: null,
        });

        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        expect(bst1.add(32)).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: {
              value: 32,
              left: null,
              right: null,
            },
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });
    });

    describe( '`get` method', () => {
      it( 'should find and return the node based on it\'s value', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        const node = bst1.get(bst1.root, 10);
        expect(node).to.deep.equal({
          current: {
            value: 10,
            left: null,
            right: null,
          },
          parent: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: {
              value: 32,
              left: null,
              right: null,
            },
          },
          isLeft: true,
        });
      });
      it( 'should should return null if the value is not found', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        const result = bst1.get(bst1.root, 1000000);
        expect(result).to.equal(null);
      });
      it( 'should should return null if the BST is empty', () => {
        const result = bst1.get(bst1.root, 1000000);
        expect(result).to.equal(null);
      });
    });
    describe( '`remove` method', () => {
      it( 'should remove a leaf node from the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        bst1.remove(32);
        expect(bst1.root).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });

      it( 'should remove a root node with zero children', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        bst1.remove(40);
        expect(bst1.root).to.deep.equal({
          value: 32,
          left: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });

      it( 'should remove a node with two children when the replacement node is on the left', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        bst1.add(5);
        bst1.add(35);
        bst1.add(30);
        bst1.add(34);
        bst1.add(38);
        bst1.remove(32);

        // This is what the correct answer SHOULD be - still not working
        expect(bst1.root).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 10,
              left: {
                value: 5,
                left: null,
                right: null,
              },
              right: null,
            },
            right: {
              value: 34,
              left: {
                value: 30,
                left: null,
                right: null,
              },
              right: {
                value: 35,
                left: null,
                right: {
                  value: 38,
                  left: null,
                  right: null,
                },
              },
            },
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });

      it( 'should remove a node with one left child from the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        bst1.add(5);
        bst1.remove(10);
        expect(bst1.root).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 5,
              left: null,
              right: null,
            },
            right: {
              value: 32,
              left: null,
              right: null,
            },
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });

      it( 'should remove a node with one right child from the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        bst1.add(35);
        bst1.remove(32);
        expect(bst1.root).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: null,
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        });
      });
    });
    describe( '`contains` method', () => {
      it( 'should return true if the node is in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.contains(40)).to.equal(true);
        expect(bst1.contains(25)).to.equal(true);
        expect(bst1.contains(78)).to.equal(true);
        expect(bst1.contains(10)).to.equal(true);
        expect(bst1.contains(32)).to.equal(true);
      });
      it( 'should return false if the node is not in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.contains(420)).to.equal(false);
        expect(bst1.contains(0)).to.equal(false);
        expect(bst1.contains(1)).to.equal(false);
        expect(bst1.contains(2)).to.equal(false);
        expect(bst1.contains(1000000)).to.equal(false);
        expect(bst1.contains(-1)).to.equal(false);
        expect(bst1.contains(6969)).to.equal(false);
      });
    });
    describe( '`findMin` method', () => {
      it( 'should return smallest node in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.findMin()).to.equal(10);
      });
    });
    describe( '`findMax` method', () => {
      it( 'should return largest node in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.findMax()).to.equal(78);
      });
    });
    describe( '`getDepth` method', () => {
      it( 'should return largest node in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.getDepth()).to.equal(2);

        bst2.add(40);
        bst2.add(25);
        bst2.add(78);
        bst2.add(10);
        bst2.add(32);
        bst2.add(5);
        bst2.add(35);
        bst2.add(15);
        bst2.add(60);
        bst2.add(79);
        expect(bst2.getDepth()).to.equal(3);
      });
    });
    describe( '`countLeaves` method', () => {
      it( 'should return number of leaves in the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.countLeaves()).to.equal(3);

        bst2.add(40);
        bst2.add(25);
        bst2.add(78);
        bst2.add(10);
        bst2.add(32);
        bst2.add(5);
        bst2.add(35);
        bst2.add(15);
        bst2.add(60);
        bst2.add(79);
        expect(bst2.countLeaves()).to.equal(5);
      });
    });
    describe( '`nodeAverages` method', () => {
      it( 'should return array of the averages for of all nodes at the same depth', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.nodeAverages()).to.deep.equal([40, 51.5, 21]);
      });
    });
    describe( 'Breadth First Search', () => {
      describe( '`breadthFirstLTR` method', () => {
        it( 'should return traversal path', () => {
          bst1.add(40);
          bst1.add(25);
          bst1.add(78);
          bst1.add(10);
          bst1.add(32);
          expect(bst1.breadthFirstLTR()).to.deep.equal([40, 40, 25, 78, 25, 78, 10, 32, 10, 32]);
        });
      });
      describe( '`breadthFirstRTL` method', () => {
        it( 'should return traversal path', () => {
          bst1.add(40);
          bst1.add(25);
          bst1.add(78);
          bst1.add(10);
          bst1.add(32);
          expect(bst1.breadthFirstRTL()).to.deep.equal([40, 40, 78, 25, 78, 25, 32, 10, 32, 10]);
        });
      });
    });

    describe( 'Depth First Search', () => {
      describe( '`preOrder` method', () => {
        it( 'should return traversal path', () => {
          bst1.add(40);
          bst1.add(25);
          bst1.add(78);
          bst1.add(10);
          bst1.add(32);
          expect(bst1.preOrder()).to.deep.equal([40, 25, 10, 32, 78]);
        });
      });
      describe( '`inOrder` method', () => {
        it( 'should return traversal path', () => {
          bst1.add(40);
          bst1.add(25);
          bst1.add(78);
          bst1.add(10);
          bst1.add(32);
          expect(bst1.preOrder()).to.deep.equal([40, 25, 10, 32, 78]);
        });
      });
      describe( '`postOrder` method', () => {
        it( 'should return traversal path', () => {
          bst1.add(40);
          bst1.add(25);
          bst1.add(78);
          bst1.add(10);
          bst1.add(32);
          expect(bst1.postOrder()).to.deep.equal([10, 32, 25, 78, 40]);
        });
      });
    });
    describe( '`convertToLinkedList` method', () => {
      it( 'should return a linked list of the tree', () => {
        bst1.add(40);
        bst1.add(25);
        bst1.add(78);
        bst1.add(10);
        bst1.add(32);
        expect(bst1.convertToLinkedList()).to.deep.equal({
          tail: {
            value: 78,
            next: null,
          },
          head: {
            value: 10,
            next: {
              value: 25,
              next: {
                value: 32,
                next: {
                  value: 40,
                  next: {
                    value: 78,
                    next: null,
                  },
                },
              },
            },
          },
        });
      });
    });
  });

  describe( 'Linear Search', () => {
    let linearSearch;

    beforeEach(() => {
      const arr = ['cat', 'dog', 'mouse', 'turtle'];
      linearSearch = new LinearSearch(arr);
    });

    describe( '`search` method', () => {
      it( 'should return `-1` if empty', () => {
        const newLinearSearch = new LinearSearch([]);
        expect(newLinearSearch.search()).to.be.equal(-1);
      });

      it( 'should return `-1` if the element is not found', () => {
        expect(linearSearch.search('pig')).to.be.equal(-1);
      });

      it( 'should return the index of the element if it\'s found', () => {
        expect(linearSearch.search('cat')).to.be.equal(0);
        expect(linearSearch.search('dog')).to.be.equal(1);
        expect(linearSearch.search('mouse')).to.be.equal(2);
        expect(linearSearch.search('turtle')).to.be.equal(3);
      });
    });
  });
});
