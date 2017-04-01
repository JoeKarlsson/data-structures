/**
 * Class - Trie
 *
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

class Trie {
  constructor() {
    this.root = {};
  }

  check(word) {
    if(typeof word !== 'string') {
      throw new TypeError();
    }
  }

  add(word) {
    let currNode = this.root;
    this.check(word);
    for(let i = 0; i < word.length; i++) {
      let c = word[i];
      if(!currNode[c]) {
        currNode[c] = {};
      }
      currNode = currNode[c];
    }
    currNode.isWord = true;
  }

  exists(word) {
    let currNode = this.root;
    this.check(word);
    for(let i = 0; i < word.length; i++) {
      let c = word[i];
      if(!currNode[c]) {
        return false;
      }else{
        currNode = currNode[c];
      }
    }
    return !!currNode.isWord;
  }
};

module.exports = Trie;
