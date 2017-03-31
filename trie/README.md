# Trie

> pronouced "trie" as in `reTRIEve`

Trie, a.k.a. a digital tree, is a search tree in which we can store data in a tree-like structure. In the case of this exercise, nodes (letters) will chain upon each other to build out a word. The last node of a word is called a leaf, signifying the end of a valid word.

For example, the word, `cat`, `catch`, and `car`.

```
root
  |
  └── c
      |
      └── a
          |
          ├─- t (leaf)
          |   |
          |   └── c
          |       |
          |       └── h (leaf)
          |
          └── r  (leaf)
```

### Usage

Running node on the `index.js` file located in the root of the repository will be your interactive test (in addition to the tests spec'd out in the `tests` directory).

```javascript
let trie = new Trie();
trie.add('cat');
trie.add('dog');

trie.exists('cat'); // returns true
trie.exists('dog'); // returns true
trie.exists('mouse'); //returns false
```

#### References

[Wikipedia: Trie](https://en.wikipedia.org/wiki/Trie)