class Node {
  constructor( value ) {
    this.value = value;
    this.children = [];
  }

  getChildren() {
    return this.children;
  }

  addChild( child ) {
    this.children.push( child );
  }

  hasChildren() {
    return this.children.length > 0;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return this.name;
  }
}

module.exports = Node;
