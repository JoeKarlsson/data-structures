class LinearSearch {
  constructor(arr) {
    this.arr = arr;
  }

  search(element) {
    for ( let i = 0; i < this.arr.length; i++) {
      if (element === this.arr[i]) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = LinearSearch;
