class Hashtable {
  constructor() {
    this._storage = [];
    this._storageLimit = 8;
  }

  insert(key, value) {
    const hash = getHash(key, this._storageLimit);

    // check if the hash index exists in HashTables
    if ( this._storage[hash] ) {
      this._storage[hash] = this._storage[hash];
    } else {
      this._storage[hash] = [];
    }

    for (let i = 0; i < this._storage[hash].length; i++) {
      const tupple = this._storage[hash][i];
      if (tupple[0] === key) {
        return 'key already exists; keys must be unique';
      }
    }
    this._storage[hash].push([key, value]);
    return 'inserted';
  }

  retrieve(key) {
    const hash = getHash(key, this._storageLimit);
    if (!this._storage[hash]) {
      return 'key does not exist';
    }
    for (let i = 0; i < this._storage[hash].length; i++) {
      const tupple = this._storage[hash][i];
      if (tupple[0] === key) {
        return tupple;
      }
    }
  }

  remove(key) {
    const hash = getHash(key, this._storageLimit);
    if (!this._storage[hash]) {
      return 'key does not exist';
    }
    for (let i = 0; i < this._storage[hash].length; i++) {
      if (this._storage[hash][i][0] === key) {
        this._storage[hash][i].splice(i, 2);
        return `${key} removed`;
      }
    }
  }
}

// helper function that generates hash
const getHash = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ( hash << 5 ) + hash + str.charCodeAt(i);
    hash &= hash; //
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = Hashtable;
// Source: https://medium.com/@jenwong/hash-tables-a-simple-javascript-example-237f92d36459#.khe8iijr8
