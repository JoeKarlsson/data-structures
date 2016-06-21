/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

// var eyes = require('eyes')

function linkedListGenerator() {
  let head = null;
  let tail = null;

  //points to our head
  function _getHead() {
    return head;
  }

  //points to our tail
  function _getTail() {
    return tail;
  }

  //takes a new node and adds it to our linked list
  function _add( value ) {
    const node = {value: value, next: null};
    if( _getHead() === null ) {
      head = node;
    } else {
      _getTail().next = node;
    }
    tail = node;
    return node;
  }

  /**
   * Reads through our list and returns the node we are looking for
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _get( index ) {
    let curNode = _getHead();
    let position =  0;

    while( position < index ) {
      if ( curNode.next === null ) {
        return false;
      }
      curNode = curNode.next;
      position++;
    }
    return curNode;
  }

  /**
   * reads through our list and removes desired node
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _remove( index ) {
    let curNode = _get(index);
    let prevNode = _get(index - 1);

    if (curNode === false) {
      return false;
    }
    if (curNode.next === null ) {
      tail = prevNode;
    }
    if( index === 0 ) {
      if( curNode.next === null) {
        head = null;
        tail = null;
      }
      head = curNode.next;
    }
    prevNode.next = curNode.next;
  };

  /**
   * reads through our list and adds a new node in desired index
   * @param  {[type]} val   [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _insert( val, index ) {
    var curNode = this.get( index );
    var prevNode = this.get( index - 1 );
    var tmpNode = _createNode( val );

    if ( index >= length || index < 0 ) {
      return false
    } else if ( index === 0 ) {
      tmpNode.next = curNode;
      head = tmpNode;
    } else {
      prevNode.next = tmpNode;
      tmpNode.next = curNode;
    }
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };
}






var books = linkedListGenerator();
books.add('Notebook');
// books.add('Harry Potter');
// books.add('FaceBook');
// eyes.inspect(books.getHead());


// var movies = linkedListGenerator();
// movies.add('star wars');
// movies.add('batman');
// movies.add('X-Men');

// eyes.inspect(movies.getHead());
