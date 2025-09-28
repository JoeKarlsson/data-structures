class Node {
  /**
   * Creates an instance of Node.
   *
   * @param {any} value   Node's value
   * @param {Node} [next] The next Node in the list
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Javascript list implementation
 *
 * @export
 * @class List
 */
class List {
  /**
   * Creates an instance of List.
   *
   * @param {any} initialValue  Value to initiate the list with.
   */
  constructor(initialValue) {
    if (initialValue) {
      this.head = new Node(initialValue);
    }
  }

  /**
   * Computes the length of the list
   * @returns {number} The length of the list
   */
  getLength() {
    let current = this.head;
    let length = 0;

    while (current) {
      current = current.next;
      length += 1;
    }

    return length;
  }

  /**
   * Returns the head of the list (the first element)
   * @returns {Node} The head node (the first node in the list)
   */
  getHead() {
    return this.head;
  }

  /**
   * Returns the tail of the list (the last element)
   * @returns {Node} The tail node (the last node in the list)
   */
  getTail() {
    return this.reduce((_, node) => node, undefined, false);
  }

  /**
   * @callback reduceCallbackFn
   * @param {any} accumulated
   * @param {any} current
   * @return {any}
   */

  /**
   * Reduces the list to a single value
   *
   * @param {reduceCallbackFN} callbackFn   Callback which reduces the list.
   * @param {any} [startingValue]           Value to initiate the reducing with.
   * @param {boolean} [extractValues=true]  Decides on what will be passed to the callbackFn,
   * either values or whole nodes.
   * @returns {any}                          Reduced value
   */
  reduce(callbackFn, startingValue, extractValues = true) {
    let currentNode;
    let accumulated;

    let extractorFn;
    if (extractValues) {
      extractorFn = (node) => node.value;
    } else {
      extractorFn = (node) => node;
    }

    if (!this.head) {
      return startingValue;
    }

    if (startingValue === undefined) {
      currentNode = this.head;
      accumulated = startingValue;
    } else {
      currentNode = this.head.next;
      accumulated = extractorFn(this.head);
    }

    while (currentNode) {
      accumulated = callbackFn(accumulated, extractorFn(currentNode));
      currentNode = currentNode.next;
    }

    return accumulated;
  }

  /**
   * @callback valueCallbackFn
   * @param {any} value
   * @param {number} index
   */

  /**
   * Traverses the list and executes the callback function for each element in the list.
   * The first argument of the callback function is the node's value, the second one is the index.
   *
   * @param {valueCallbackFn} callbackFn  Function invoked for each element in the list.
   */
  forEach(callbackFn) {
    let index = 0;

    this.reduce((_, value) => {
      callbackFn(value, index);
      index += 1;
      return null;
    });
  }

  /**
   * Executes callbackFn on each item from the list and returns the results as another list.
   *
   * @param {valueCallbackFn} callbackFn  Function invoked for each element in the list
   * @returns {List}   Transformed list
   */
  map(callbackFn) {
    const outputList = new List();

    this.forEach((value, index) => {
      const transformedValue = callbackFn(value, index);
      outputList.pushBack(transformedValue);
    });

    return outputList;
  }

  /**
   * Retrieves the Node with a given index
   *
   * @param {number} targetIndex  Wanted node's index
   * @returns {Node}               Found node
   */
  get(targetIndex) {
    let currentIndex = 0;
    let currentNode = this.head;

    if (targetIndex < 0) {
      throw new Error('Index exceeds list\'s size');
    }

    while (currentIndex < targetIndex && currentNode) {
      if (currentNode.next === null) {
        throw new Error('Index exceeds list\'s size');
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Adds a value to the end of the list
   *
   * @param {any} newValue  A value to be added
   * @returns {List}         This list. Allows for chainability
   */
  pushBack(newValue) {
    const newNode = new Node(newValue);
    const tail = this.getTail();

    if (tail) {
      tail.next = newNode;
    } else {
      this.head = newNode;
    }

    return this;
  }

  /**
   * Adds a value at a given index
   *
   * @param {any} value     Value to be added.
   * @param {number} index  Index at which the value should be added.
   * @throws {Error} Index must not exceed list size.
   * @returns {List}    This list. Allows for chainability.
   */
  push(value, index) {
    if (index === 0) {
      // Replace head
      this.head = new Node(value, this.head);
    } else {
      const previousNode = this.get(index - 1);
      if (!previousNode) {
        throw new Error('Index exceeds list\'s size');
      }

      const nextNode = previousNode.next;
      previousNode.next = new Node(value, nextNode);
    }

    return this.head;
  }

  /**
   * Removes nodes with specific values from the list
   *
   * @param {any} valueToRemove A value to be removed
   * @returns {List}             This list. Allows for chainability.
   */
  remove(valueToRemove) {
    if (this.head.next === null) {
      this.head = {};
      return this.head;
    }
    if (this.head.value === valueToRemove) {
      this.head = this.head.next;
      return this.remove(valueToRemove);
    }

    this._removeRecursive(this.head, valueToRemove);
    return this;
  }

  /**
   * Used internally by remove. Replaces the current node with a next one if the value matches.
   *
   * @private
   * @param {Node} previousNode Reference to the previous node.
   * @param {any} valueToRemove Value to be removed.
   */
  _removeRecursive(previousNode, valueToRemove) {
    if (!previousNode.next) {
      return;
    }
    const currentNode = previousNode.next;

    if (currentNode.value === valueToRemove) {
      previousNode.next = currentNode.next;
      this._removeRecursive(previousNode, valueToRemove);
    } else {
      this._removeRecursive(currentNode, valueToRemove);
    }
  }

  /**
   * Returns the first node that value matches.
   *
   * @param {any} value Value to be found
   * @returns {Node}     Node with that value
   */
  find(value) {
    const findRecursive = (node, value) => {
      if (!node) {
        return null;
      } if (node.value === value) {
        return node;
      }
      return findRecursive(node.next, value);
    };

    return findRecursive(this.head, value);
  }

  /**
   * Converts the list to an array
   *
   * @returns {any[]}  Array of values from the list
   */
  getValues() {
    const valuesArray = [];
    this.forEach((value) => valuesArray.push(value));
    return valuesArray;
  }

}

module.exports = List;

// Source: https://github.com/Gelio/js-list
