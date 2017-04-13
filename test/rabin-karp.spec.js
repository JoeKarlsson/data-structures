const chai = require('chai');
const searchRabinKarp = require('../rabin-karp/rk');

const { expect } = chai;

describe( 'Rabin-Karp', () => {
  describe( '`searchRabinKarp` method', () => {
    it( 'str.length < text.length and match', () => {
      expect(searchRabinKarp('abcdefgh', 'cde')).to.deep.equal([2]);
    });
    it( 'str.length < text.length and no match', () => {
      expect(searchRabinKarp('abcdefgh', 'klm')).to.deep.equal([]);
    });
    it( 'str.length < text.length and several matches', () => {
      expect(searchRabinKarp('abcdefabcdefabcdef', 'cd')).to.deep.equal([2, 8, 14]);
    });
    it( 'str.length == text.length and match', () => {
      expect(searchRabinKarp('abc', 'abc')).to.deep.equal([0]);
    });
    it( 'str.length == text.length and no match', () => {
      expect(searchRabinKarp('abc', 'def')).to.deep.equal([]);
    });
    it( 'str.length > text.length', () => {
      expect(searchRabinKarp('abc', 'abcd')).to.deep.equal([]);
    });
    it( 'long string', () => {
      expect(searchRabinKarp('abcdabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc', 'cd')).to.deep.equal([2]);
    });
  });
});
