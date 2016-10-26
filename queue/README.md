# Queues

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

## Priority Queue (abstract data type)

In computer science, a priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. In a priority queue, an element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

While priority queues are often implemented with heaps, they are conceptually distinct from heaps. A priority queue is an abstract concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods such as an unordered array.

One can imagine a priority queue as a modified queue, but when one would get the next element off the queue, the highest-priority element is retrieved first.

Stacks and queues may be modeled as particular kinds of priority queues. As a reminder, here is how stacks and queues behave:

* stack – elements are pulled in last-in first-out-order (e.g., a stack of papers)
* queue – elements are pulled in first-in first-out-order (e.g., a line in a cafeteria)

In a stack, the priority of each inserted element is monotonically increasing; thus, the last element inserted is always the first retrieved. In a queue, the priority of each inserted element is monotonically decreasing; thus, the first element inserted is always the first retrieved.