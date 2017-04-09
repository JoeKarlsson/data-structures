class Node {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.neighbors = [];
  }

  addNeighbors(arr) {
    if (this.neighbors.length !== 0 && arr !== undefined) {
      this.neighbors = this.neighbors.concat(arr);
    } else if (this.neighbors.length === 0 && arr !== undefined) {
      this.neighbors = arr;
      return this.neighbors;
    }
    return this.neighbors;
  }

  getNeighbors() {
    return this.neighbors;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return this.name;
  }
}

module.exports = Node;
