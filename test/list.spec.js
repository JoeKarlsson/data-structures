const chai = require('chai');
const List = require('../list/list');

const { expect } = chai;

describe( 'List', () => {
  let list;
  let values;
  let list2;
  let numValues;

  beforeEach(() => {
    values = ['lorem', 'ipsum', 'dolor', 'et'];
    list = new List();
    values.forEach((value) => list.pushBack(value));

    numValues = [1, 2, 3, 4, 5];
    list2 = new List();
    numValues.forEach((value) => list2.pushBack(value));
  });

  describe( 'Constructor', () => {
    it( 'should return a new empty List', () => {
      const list2 = new List('Cat');
      const list3 = new List();
      expect(list2).to.deep.equal({
        head: {
          value: 'Cat',
          next: null,
        },
      });
      expect(list3).to.deep.equal({});
    });
  });
  describe( '`pushback` method', () => {
    it( 'should add a new node to the end of the list', () => {
      expect(list).to.deep.equal({
        head: {
          value: 'lorem',
          next: {
            value: 'ipsum',
            next: {
              value: 'dolor',
              next: {
                value: 'et',
                next: null,
              },
            },
          },
        },
      });
      expect(list.pushBack('Cat')).to.deep.equal({
        head: {
          value: 'lorem',
          next: {
            value: 'ipsum',
            next: {
              value: 'dolor',
              next: {
                value: 'et',
                next: {
                  value: 'Cat',
                  next: null,
                },
              },
            },
          },
        },
      });
    });
  });
  describe( '`getLength` method', () => {
    it( 'should the entire List with a new node', () => {
      const list2 = new List('Cat');
      const list3 = new List();

      expect(list.getLength()).to.equal(4);
      expect(list2.getLength()).to.equal(1);
      expect(list3.getLength()).to.equal(0);
    });
  });
  describe( '`gethead` method', () => {
    it( 'should the return head of the List', () => {
      expect(list.getHead()).to.deep.equal({
        value: 'lorem',
        next: {
          value: 'ipsum',
          next: {
            value: 'dolor',
            next: {
              value: 'et',
              next: null,
            },
          },
        },
      });
    });
  });
  describe( '`getTail` method', () => {
    it( 'should return the tail of the list', () => {
      expect(list.getTail()).to.deep.equal({
        value: 'et',
        next: null,
      });
    });
  });
  describe( '`get` method', () => {
    it( 'should retrieve the Node with a given index', () => {
      expect(list.get(0)).to.deep.equal({
        value: 'lorem',
        next: {
          value: 'ipsum',
          next: {
            value: 'dolor',
            next: {
              value: 'et',
              next: null,
            },
          },
        },
      });
      expect(list.get(1)).to.deep.equal({
        value: 'ipsum',
        next: {
          value: 'dolor',
          next: {
            value: 'et',
            next: null,
          },
        },
      });
      expect(list.get(2)).to.deep.equal({
        value: 'dolor',
        next: {
          value: 'et',
          next: null,
        },
      });
      expect(list.get(3)).to.deep.equal({
        value: 'et',
        next: null,
      });
    });
    it( 'should throw an error if the index exceeds list\'s size', () => {
      expect(list.get.bind(list, 100)).to.throw('Index exceeds list\'s size');
      expect(list.get.bind(list, -1)).to.throw('Index exceeds list\'s size');
      expect(list.get.bind(list, 5)).to.throw('Index exceeds list\'s size');
    });
  });
  describe( '`push` method', () => {
    it( '`push(0, *)` should at a new node at the head', () => {
      expect(list.push('cat', 0)).to.deep.equal({
        value: 'cat',
        next: {
          value: 'lorem',
          next: {
            value: 'ipsum',
            next: {
              value: 'dolor',
              next: {
                value: 'et',
                next: null,
              },
            },
          },
        },
      });
    });
    it( 'should add a new node at index', () => {
      expect(list.push('Cat', 2)).to.deep.equal({
        value: 'lorem',
        next: {
          value: 'ipsum',
          next: {
            value: 'Cat',
            next: {
              value: 'dolor',
              next: {
                value: 'et',
                next: null,
              },
            },
          },
        },
      });
    });
    it( 'should throw an error if the index exceeds list\'s size', () => {
      expect(list.push.bind(list, 'Cat', 100)).to.throw('Index exceeds list\'s size');
      expect(list.push.bind(list, 'Cat', -1)).to.throw('Index exceeds list\'s size');
      expect(list.push.bind(list, 'Cat', 5)).to.throw('Index exceeds list\'s size');
    });
  });
  describe( '`find` method', () => {
    it( 'should return the first node that value matches', () => {
      expect(list.find('lorem')).to.deep.equal({
        value: 'lorem',
        next: {
          value: 'ipsum',
          next: {
            value: 'dolor',
            next: {
              value: 'et',
              next: null,
            },
          },
        },
      });
      expect(list.find('ipsum')).to.deep.equal({
        value: 'ipsum',
        next: {
          value: 'dolor',
          next: {
            value: 'et',
            next: null,
          },
        },
      });
      expect(list.find('dolor')).to.deep.equal({
        value: 'dolor',
        next: {
          value: 'et',
          next: null,
        },
      });
      expect(list.find('et')).to.deep.equal({
        value: 'et',
        next: null,
      });
    });
    it( 'should return null if the value is not in the list', () => {
      expect(list.find('foobar')).to.equal(null);
      expect(list.find(undefined)).to.equal(null);
      expect(list.find(null)).to.equal(null);
      expect(list.find(1001)).to.equal(null);
    });

  });
  describe( '`getValues` method', () => {
    it( 'should return an array of the list', () => {
      expect(list.getValues()).to.deep.equal(values);
    });
  });
  describe( '`reduce` method', () => {
    it( 'should reduce the list to a single value', () => {
      const numValues = [1, 2, 3, 4, 5];
      const list2 = new List();
      numValues.forEach((value) => list2.pushBack(value));

      expect(list2.reduce((prev, curr) => prev + curr, 0)).to.equal(15);

      expect(list2.reduce((prev, curr) => prev + curr, 2)).to.equal(15);

      expect(list.reduce((prev, curr) => prev + curr, 0)).to.equal('loremipsumdoloret');
    });
  });

  describe( '`forEach` method', () => {
    it( 'should traverse the list and executes the callback function for each element in the list.', () => {

      let numSum = 0;

      list2.forEach((el) => {
        numSum += el;
      });
      expect(numSum).to.deep.equal(15);

      let stringSum = '';
      list.forEach((el) => {
        stringSum += el;
      });
      expect(stringSum).to.deep.equal('loremipsumdoloret');
    });
  });

  describe( '`map` method', () => {
    it( 'should execute callbackFn on each item from the list and returns the results as another list.', () => {
      expect(list2.map((el) => ++el)).to.deep.equal({
        head: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: {
                  value: 6,
                  next: null,
                },
              },
            },
          },
        },
      });
      expect(list.map((el) => `${el} foo`)).to.deep.equal({
        head: {
          value: 'lorem foo',
          next: {
            value: 'ipsum foo',
            next: {
              value: 'dolor foo',
              next: {
                value: 'et foo',
                next: null,
              },
            },
          },
        },
      });
    });
  });

  describe( '`remove` method', () => {
    it( 'should remove nodes with specific values from the list', () => {
      expect(list.remove('ipsum')).to.deep.equal({
        head: {
          value: 'lorem',
          next: {
            value: 'dolor',
            next: {
              value: 'et',
              next: null,
            },
          },
        },
      });
      expect(list.remove('et')).to.deep.equal({
        head: {
          value: 'lorem',
          next: {
            value: 'dolor',
            next: null,
          },
        },
      });
      expect(list.remove('dolor')).to.deep.equal({
        head: {
          value: 'lorem',
          next: null,
        },
      });
      list.remove('lorem');
      expect(list).to.deep.equal({
        head: {},
      });
    });
  });

});
