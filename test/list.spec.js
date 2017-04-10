const chai = require('chai');
const List = require('../list/list');

const { expect } = chai;

describe( 'List', () => {
  let list;
  let values;

  beforeEach(() => {
    values = ['lorem', 'ipsum', 'dolor', 'et'];
    list = new List();

    values.forEach(value => list.pushBack(value));
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

    });

    it( 'should throw an error if the index exceeds list\'s size', () => {

    });
  });

  describe( '`find` method', () => {
    it( 'should return the node at value', () => {
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
      expect(list.find('foobar')).to.deep.equal(null);
    });
    it( 'should return null if the value is not in the list', () => {
      expect(list.find('foobar')).to.equal(null);
      expect(list.find(undefined)).to.equal(null);
      expect(list.find(null)).to.equal(null);
      expect(list.find(1001)).to.equal(null);
    });

  });
  describe( '`getValues` method', () => {
    it( 'should return the tail of the list', () => {
      expect(list.getValues()).to.deep.equal(values);
    });
  });

});
