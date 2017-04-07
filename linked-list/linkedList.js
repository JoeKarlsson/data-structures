/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  // points to our head
  getHead() {
    return this.head;
  }

  // points to our tail
  getTail() {
    return this.tail;
  }

  // Create a new node
  newNode( value ) {
    return {
      value,
      next: null,
    };
  }

  // Takes a new node and adds it to our linked list
  add( value ) {
    const node = this.newNode( value );

    // init empty LL
    if ( this.getHead() === null ) {
      this.head = node;
    } else { // if it's not empty
      this.getTail().next = node;
    }
    // Happy Path
    this.tail = node;
    return node;
  }

  /**
   * Reads through our list and returns the node we are looking for
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  get( index ) {
    let currNode = this.getHead();
    let postion = 0;

    // If index is less than 0, return false
    if ( index <= -1 ) {
      return false;
    }

    // Loop through all the nodes
    while ( postion < index ) {

      // Check if we hit the end of the LL
      if ( currNode.next === null ) {
        return false;
      }

      // If node exists go to next node
      currNode = currNode.next;
      postion++;
    }

    return currNode;
  }

  /**
   * reads through our list and removes desired node
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  remove( index ) {
    const currNode = this.get( index );
    const prevNode = this.get( index - 1 );

    // If index not in LL, return false
    if ( currNode === false ) {
      return false;
    }

    // If removing the head, reassign the head to the next node
    if ( index === 0 ) {
      this.head = currNode.next;

    // If removing the tail, reassign the tail to the prevNode
    } else if ( currNode.next === null ) {
      this.tail = prevNode;
      prevNode.next = currNode.next;

    // Happy Path
    } else {
      prevNode.next = currNode.next;
    }
  }

  insert( value, index ) {
    const currNode = this.get( index );
    const prevNode = this.get( index - 1 );
    const node = this.newNode( value );

    // If index not in LL, return false
    if ( currNode === false ) {
      return false;
    }

    // If inserting at the head, reassign the head to the new node
    if ( index === 0 ) {
      this.head = node;
      node.next = currNode;
    } else {

      // If inserting at the tail, reassign the tail
      if (currNode.next === null) {
        this.tail = node;
      }
      node.next = currNode;
      prevNode.next = node;
    }
    return node;
  }
}

module.exports = LinkedList;

