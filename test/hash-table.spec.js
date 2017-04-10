const chai = require('chai');
const HashTable = require('../hash-table/hash-table');

const { expect } = chai;

describe( 'Hash Table', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  describe( '`insert` method', () => {
    it( 'should return `inserted` if successful', () => {
      expect(hashTable.insert('Cat', 'Elvis')).to.equal('inserted');
      expect(hashTable.insert('Cat2', 'BMO')).to.equal('inserted');
      expect(hashTable.insert('Cat4', 'Merrie')).to.equal('inserted');
      expect(hashTable.insert('Dog', 'Rover')).to.equal('inserted');
    });
    it( 'should `key already exists; keys must be unique` if duplicate key', () => {
      hashTable.insert('Cat', 'Elvis');
      hashTable.insert('Cat2', 'BMO');
      hashTable.insert('Cat4', 'Merrie');
      hashTable.insert('Dog', 'Rover');
      expect(hashTable.insert('Cat', 'Elvis')).to.equal('key already exists; keys must be unique');
      expect(hashTable.insert('Cat2', 'BMO')).to.equal('key already exists; keys must be unique');
      expect(hashTable.insert('Cat4', 'Merrie')).to.equal('key already exists; keys must be unique');
      expect(hashTable.insert('Dog', 'Rover')).to.equal('key already exists; keys must be unique');
    });
  });

  describe( '`retrieve` method', () => {
    it( 'should return `key does not exist` if the key has not been added', () => {
      expect(hashTable.retrieve('Cat')).to.equal('key does not exist');
      expect(hashTable.retrieve('Dog')).to.equal('key does not exist');
      expect(hashTable.retrieve('Human')).to.equal('key does not exist');
    });
    it( 'should return the tupple if successful', () => {
      hashTable.insert('Cat', 'Elvis');
      hashTable.insert('Cat2', 'BMO');
      hashTable.insert('Cat4', 'Merrie');
      hashTable.insert('Dog', 'Rover');
      expect(hashTable.retrieve('Cat')).to.deep.equal(['Cat', 'Elvis']);
      expect(hashTable.retrieve('Cat2')).to.deep.equal(['Cat2', 'BMO']);
      expect(hashTable.retrieve('Cat4')).to.deep.equal(['Cat4', 'Merrie']);
      expect(hashTable.retrieve('Dog')).to.deep.equal(['Dog', 'Rover']);
    });
  });

  describe( '`remove` method', () => {
    it( 'should return `key does not exist` if the key does not exist', () => {
      expect(hashTable.remove('Cat')).to.equal('key does not exist');
      expect(hashTable.remove('Dog')).to.equal('key does not exist');
      expect(hashTable.remove('Human')).to.equal('key does not exist');
    });
    it( 'should return `[key name] removed` if successful', () => {
      hashTable.insert('Cat', 'Elvis');
      hashTable.insert('Cat2', 'BMO');
      hashTable.insert('Cat4', 'Merrie');
      hashTable.insert('Dog', 'Rover');
      expect(hashTable.remove('Cat')).to.equal('Cat removed');
      expect(hashTable.remove('Dog')).to.equal('Dog removed');
      expect(hashTable.remove('Cat2')).to.equal('Cat2 removed');
      expect(hashTable.remove('Cat4')).to.equal('Cat4 removed');
    });
  });
});
