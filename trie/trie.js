class TrieNode {
  constructor(value) {
    this.isWord = false;
    this.value = value;
    this.children = {};
  }
}

const isString = ( word ) => {
  if ( typeof word !== 'string' ) {
    throw new TypeError('Input must be of type string');
  }
};

class Trie {
  constructor() {
    this.words = 0;
    this.root = new TrieNode('');
  }

  add(word) {
    isString(word);
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      let nextNode = currNode.children[letter];

      if (nextNode === undefined) {
        nextNode = new TrieNode(letter);
      }
      currNode.children[letter] = nextNode;
      currNode = nextNode;

    }
    if (currNode.isWord === false) {
      this.words++;
      currNode.isWord = true;
    }
  }

  exists(word) {
    isString(word);
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!currNode.children[letter]) {
        return false;
      }
      currNode = currNode.children[letter];
    }
    return !!currNode.isWord;
  }
}

module.exports = Trie;
