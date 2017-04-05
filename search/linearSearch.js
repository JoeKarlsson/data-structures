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

const arr = ['cat', 'dog', 'mouse', 'turtle'];
const linear = new LinearSearch(arr);

console.log(linear.search('cat')); // 0
console.log(linear.search('barf bucket')); // -1
