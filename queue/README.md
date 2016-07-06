# Queue (abstract data type)

 A queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.

 ![Representation of a FIFO (first in, first out) queue](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

### A simple queue implemented in Ruby:

```ruby
class Queue
  def initialize
    @list = Array.new
  end

  def enqueue(element)
    @list << element
  end

  def dequeue
    @list.shift
  end
end
```
