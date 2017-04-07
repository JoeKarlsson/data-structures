const LinkedList = require('../linked-list/linkedList');
const chai = require('chai');

const expect = chai.expect;

describe('Linked List', () => {
  let newLinkedList;

  it('should be a function', () => {
    expect(LinkedList).to.exist;
    expect(LinkedList).to.be.a('function');
  });

  describe('returns a LinkedList object used to interact with the private Linked List object', function () {
    beforeEach(() => {
      newLinkedList = new LinkedList();
    });
    it('should return a module object', () => {
      expect(newLinkedList).to.be.an('object');
    });
  });

  describe('Linked List has methods available through Linked List Object', function () {
    beforeEach(() => {
      newLinkedList = new LinkedList();
    });
    it('should have a method named `getHead`', () => {
      expect(newLinkedList.getHead).to.exist;
      expect(newLinkedList.getHead).to.be.a('function');
    });
    it('should have a method named `getTail`', () => {
      expect(newLinkedList.getTail).to.exist;
      expect(newLinkedList.getTail).to.be.a('function');
    });
    it('should have a method named `add`', () => {
      expect(newLinkedList.add).to.exist;
      expect(newLinkedList.add).to.be.a('function');
    });
    it('should have a method named `remove`', () => {
      expect(newLinkedList.remove).to.exist;
      expect(newLinkedList.remove).to.be.a('function');
    });
    it('should have a method named `get`', () => {
      expect(newLinkedList.get).to.exist;
      expect(newLinkedList.get).to.be.a('function');
    });
    it('should have a method named `insert`', () => {
      expect(newLinkedList.insert).to.exist;
      expect(newLinkedList.insert).to.be.a('function');
    });
  });

  describe('`getHead` method', () => {
    let urlList;

    beforeEach(() => {
      urlList = new LinkedList();
    });
    it('should retrieve the value of the first node in a list', () => {
      expect(urlList.getHead).to.be.a('function');
      expect(urlList.getHead()).to.be.null;
    });
  });

  describe('`getTail` method', () => {
    let urlList;

    beforeEach(() => {
      urlList = new LinkedList();
    });
    it('should retrieve the value of the first node in a list',() => {
      expect(urlList.getTail).to.be.a('function');
      expect(urlList.getTail()).to.be.null;
    });
  });

  describe('`add` method', () => {
    let newNodeA;
    let newLinkedListA;
    let newLinkedListB;
    let newLinkedListC;

    beforeEach(() => {
      newLinkedListA = new LinkedList(); // return new node
      newLinkedListB = new LinkedList(); // for `head` and `tail`
      newLinkedListC = new LinkedList(); // for `tail`
      newNodeA = newLinkedListA.add('http://slashdot.org');
    });

    describe('should return a new node object after appending the node to the list', function () {
      it('should return a new node object', () => {
        expect(newNodeA).to.not.be.undefined;
        expect(newNodeA.value).to.be.equal('http://slashdot.org');
      });
      it('should have a property named `value`', () => {
        expect(newNodeA.value).to.exist;
      });
      it('should have a property named `next`', () => {
        expect(newNodeA.next).to.be.defined;
        expect(newNodeA.next).to.be.null;
      });
    });

    describe('should append new nodes', () => {
      it('`head` and `tail` should reference the same node object when adding to an empty list', function () {
        // add a new node!
        newLinkedListB.add('http://devleague.com');

        // test!
        expect(newLinkedListB.getHead().value).to.equal('http://devleague.com');
        expect(newLinkedListB.getTail().value).to.equal('http://devleague.com');

        // really the same?
        expect(newLinkedListB.getHead()).to.equal(newLinkedListB.getTail())
      });
    });

    describe('should append even more nodes', () => {
      it('`tail` should reference the most recently added node', () => {
        // add new nodes
        newLinkedListC.add('http://eff.org');
        newLinkedListC.add('http://devleague.com');

        // tests!
        // console.log(newLinkedListC.getHead());
        expect(newLinkedListC.getHead().value).to.equal('http://eff.org');
        expect(newLinkedListC.getTail().value).to.equal('http://devleague.com');

        // add another node
        newLinkedListC.add('http://xkcd.org');

        // test!
        expect(newLinkedListC.getHead().value).to.equal('http://eff.org');
        expect(newLinkedListC.getTail().value).to.equal('http://xkcd.org');
      });
    });
  });
  describe('`get` method', () => {
    let urlList;
    let bookList;

    beforeEach(() => {
      urlList = new LinkedList();
      bookList = new LinkedList();

      const urlArr = [
        'news.ycombinator.com',
        'mozilla.org',
        'eff.org',
        'icann.org',
      ];

      const bookArr = [
        'Ready Player One',
        '1982',
        'Neuromancer',
        'Snow Crash',
      ];

      urlArr.forEach((url) => {
        urlList.add(url);
      });
      bookArr.forEach((book) => {
        bookList.add(book);
      });
    });

    describe('takes an argument', () => {
      it('should find a node by it\'s index in the Linked List', () => {
        // urlList Tests
        expect(urlList.get(0).value).to.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.equal('mozilla.org');
        expect(urlList.get(2).value).to.equal('eff.org');
        expect(urlList.get(3).value).to.equal('icann.org');

        expect(urlList.getHead().value).to.equal('news.ycombinator.com');
        expect(urlList.getTail().value).to.equal('icann.org');

        // bookList Tests
        expect(bookList.get(0).value).to.equal('Ready Player One');
        expect(bookList.get(1).value).to.equal('1982');
        expect(bookList.get(2).value).to.equal('Neuromancer');
        expect(bookList.get(3).value).to.equal('Snow Crash');

        expect(bookList.getHead().value).to.equal('Ready Player One');
        expect(bookList.getTail().value).to.equal('Snow Crash');
      });
      it('should return `false` if no node is found', () => {
        expect(urlList.get(4)).to.be.false;
        expect(urlList.get(5)).to.be.false;
        expect(bookList.get(4)).to.be.false;
        expect(bookList.get(5)).to.be.false;
      });
    });
  });

  describe('`remove` method', () => {
    let urlList;
    let bookList;

    beforeEach(() => {
      urlList = new LinkedList();
      bookList = new LinkedList();

      const urlArr = [
        'news.ycombinator.com',
        'mozilla.org',
        'eff.org',
        'icann.org',
      ];

      const bookArr = [
        'Ready Player One',
        '1982',
        'Neuromancer',
        'Snow Crash',
      ];

      urlArr.forEach((url) => {
        urlList.add(url);
      });
      bookArr.forEach((book) => {
        bookList.add(book);
      });
    });

    describe('takes an argument', () => {
      it('should remove a node by it\'s index in the Linked List', () => {
        // urlList Tests
        // remove middle node
        urlList.remove(2);

        // test new node at position 2
        expect(urlList.get(2).value).to.equal('icann.org');

        // remove last node
        urlList.remove(2);

        // retrieve new node at position 2
        expect(urlList.get(2)).to.be.false;
        expect(urlList.getHead().value).to.equal('news.ycombinator.com');
        expect(urlList.getTail().value).to.equal('mozilla.org');

        // bookList Tests
        // remove first node
        bookList.remove(0);
        console.log(bookList.get(0))
        expect(bookList.get(0).value).to.equal('1982');
        bookList.remove(1);
        expect(bookList.getHead().value).to.equal('1982');
        expect(bookList.getTail().value).to.equal('Snow Crash');
      });
      it('should return `false` if a node cannot be found to be removed', () => {
        expect(urlList.remove(9)).to.be.false;
        expect(urlList.remove(4)).to.be.false;
        expect(bookList.remove(4)).to.be.false;
        expect(bookList.remove(6)).to.be.false;
      });
    });
  });

  describe('`insert` method', () => {
    let urlList;
    let bookList;

    beforeEach(() => {
      urlList = new LinkedList();
      bookList = new LinkedList();

      const urlArr = [
        'news.ycombinator.com',
        'icann.org',
      ];

      const bookArr = [
        'Neuromancer',
        'Snow Crash',
      ];

      urlArr.forEach((url) => {
        urlList.add(url);
      });
      bookArr.forEach((book) => {
        bookList.add(book);
      });
    });
    describe('takes two arguments, a `value` and an `index`', () => {
      it('should add a new node at a given index', () => {
        // insert into second position of list
        urlList.insert('mozilla.org', 1);
        expect(urlList.get(0).value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.be.equal('mozilla.org');
        expect(urlList.get(2).value).to.be.equal('icann.org');

        // insert into beginning of list
        bookList.insert('Ready Player One', 0);
        expect(bookList.get(0).value).to.be.equal('Ready Player One');
        expect(bookList.get(1).value).to.be.equal('Neuromancer');
        expect(bookList.get(2).value).to.be.equal('Snow Crash');

        urlList.insert('devleague.com', 1);
        expect(urlList.get(0).value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.be.equal('devleague.com');
        expect(urlList.get(2).value).to.be.equal('mozilla.org');
        expect(urlList.get(3).value).to.be.equal('icann.org');

        // insert into index `1`
        bookList.insert('The Stranger', 1);
        expect(bookList.getHead().value).to.be.equal('Ready Player One');
        expect(bookList.get(0).value).to.be.equal('Ready Player One');
        expect(bookList.get(1).value).to.be.equal('The Stranger');
        expect(bookList.get(2).value).to.be.equal('Neuromancer');
      });
      it('should return `false` if the index given is a value larger than the List\'s length', () => {
        // urlList has two items, it's max index value is 1
        expect(urlList.insert('boingboing.net', 3)).to.be.false;
        expect(urlList.getHead().value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(0).value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.be.equal('icann.org');
        expect(urlList.getTail().value).to.be.equal('icann.org');

        // test -1
        expect(bookList.insert('The Stranger', -1)).to.be.false;
        expect(bookList.getHead().value).to.be.equal('Neuromancer');
        expect(bookList.get(0).value).to.be.equal('Neuromancer');
        expect(bookList.get(1).value).to.be.equal('Snow Crash');
        expect(bookList.getTail().value).to.equal('Snow Crash');

      });
    });
  });
});
