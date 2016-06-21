# Linked List - An Abstract Data Type

We will be creating a **module** that helps us generate a **Linked List**. A linked list is a data structure that contains **nodes**. Each **node** has a `value` and a `next` property. The `value` property contains some data that a user-defined when the node was created. The `next` property points to the next **node** in the list, ergo this is how the nodes are linked.

The last **node** in a Linked List will have a `null` value for the `next` property.

## Linked List Example

    {
      value: 'Ready Player One',
      next: {
        value: '1982',
        next: {
          value: 'Neuromancer',
          next: {
            value: 'Snow Crash',
            next: null
          }
        }
      }
    }

## Methods

### getHead()
Returns the value of the first node of the list

    linkedListExample.getHead(); // returns a node object...
    {
      value: 'Ready Player One'
      next: { ... }
    }

### getTail()
Returns the value of the last node of a list.

    linkedListExample.getTail(); // returns a node object...
    {
      value: 'Snow Crash',
      next: null
    }

### add(Value)
Takes in any data value and adds a new node to the end of a list. Returns the new node that was created.

    linkedListExample.add('The Stranger'); // returns the newly created and appended node...
    {
      value: 'The Stranger',
      next: null
    }

### get(Number)
Takes in a Number value and searches for the **Nth node** in a list and returns that node

    linkedListExample.get(2); // returns a node object...
    {
      value: 'Neuromancer',
      next: { ... }
    }

### remove(Number)
Takes in a Number value and searches for the Nth node removes it from the list. Should return `false` if the the position is outside the length of the list.

    linkedListExample.remove(3);

### insert(Value, Number)
Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right. Cannot be used to append a node to the end of a list, if attempted, should return `false`.

## Getting Started
1. Fork this repository and clone it from your personal GitHub Account
1. In the Terminal, navigate to the newly created folder for this repository.
1. Install dependencies by running the command: `npm install`
1. Run tests by running the command: `npm test`
1. Your work will be one in the file named: `linkedList.js`
1. Pay attention to the tests for hints on what Method names it expects.
1. There are no stub descriptions in this exercise.
1. Make your tests pass!