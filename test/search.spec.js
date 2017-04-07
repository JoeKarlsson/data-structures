const chai = require('chai');
const LinearSearch = require('../search/linearSearch');
const BinarySearchTree = require('../search/binary-search-tree');

const { expect } = chai;

describe( 'Search', () => {
  describe( 'Binary Search', () => {
    let bst;

    beforeEach(() => {
      bst = new BinarySearchTree();
    });
    describe( '`add` method', () => {
      it( 'should add a new node to the tree', () => {
        expect(bst.add(40)).to.deep.equal({
          value: 40,
          left: null,
          right: null,
        });

        bst.add(40);
        bst.add(25);
        bst.add(78);
        bst.add(10);
        expect(bst.add(32)).to.deep.equal({
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
    describe( '`remove` method', () => {
      it( 'should remove a new node from the tree', () => {
        bst.add(40);
        bst.add(25);
        bst.add(78);
        bst.add(10);
        bst.add(32);
        bst.remove(32);
        expect(bst.root).to.deep.equal({
          value: 40,
          left: {
            value: 25,
            left: {
              value: 10,
              left: null,
              right: null,
            },
          },
          right: {
            value: 78,
            left: null,
            right: null,
          },
        })
      });
    });
  });

  describe( 'Linear Search', () => {
    let linearSearch;

    beforeEach(() => {
      const arr = ['cat', 'dog', 'mouse', 'turtle'];
      linearSearch = new LinearSearch(arr);
    });

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
