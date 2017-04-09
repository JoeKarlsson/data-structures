class Hashtable {
  constructor() {
    this._storage = [];
    this._storageLimit = 8;
  }

  insert(key, value) {
    let hash = getHash(key, this._storageLimit);
    this._storage[hash] ? this._storage[hash] = this._storage[hash] :
    this._storage[hash] = [];
    for (let i = 0; i < this._storage[hash].length; i++) {
      let tupple = this._storage[hash][i];
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
    if (!this._storage[hash]) return 'key does not exist';
    for (let i = 0; i < this._storage[hash].length; i++) {
      if (this._storage[hash][i][0] === key) {
        this._storage[hash][i].splice(i, 2);
        return `${key} removed`;
      }
    }
    return false;
  }
}

// helper function that generates hash
var getHash = function (str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; //
    hash = Math.abs(hash);
  }
  return hash % max;
};

const myHash = new Hashtable();
console.log(myHash.insert('Cat', 'Elvis'))
console.log(myHash.insert('Cat2', 'BMO'))
console.log(myHash.insert('Cat3', 'Cake'))
console.log(myHash.insert('Cat4', 'Merrie'))
console.log(myHash.insert('Dog', 'Rover'))
console.log(myHash.insert('Human', 'Joe'))
console.log(myHash.insert('Human2', 'Ray'))
console.log(myHash.insert('Human3', 'Sean'))
console.log(myHash.insert('Human4', 'Jon'))

// console.log(myHash.retrieve('Cat'));
// console.log(myHash.retrieve('Dog'));
console.log(myHash.retrieve('Human4'));
// Source: https://medium.com/@jenwong/hash-tables-a-simple-javascript-example-237f92d36459#.khe8iijr8