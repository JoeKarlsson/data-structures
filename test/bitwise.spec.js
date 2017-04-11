const chai = require('chai');
const bitwise_basics = require('../bitwise/bitwise-basics');
const bitwise_rgb_hex_binary = require('../bitwise/bitwise-rgb-hex-binary');

const { expect } = chai;

describe( 'Bitwise', () => {
  describe( 'Bitwise Basics', () => {
    describe( 'bitwise AND', () => {
      it( 'should return the binary & of two integers', () => {
        // 1001 & 1110 = 1000
        expect(bitwise_basics.bitwiseAND(9, 14)).to.equal('1000');
      });
    });

    describe( 'bitwise OR', () => {
      it( 'should return the binary | of two integers', () => {
        // 1001 | 1110 = 1111
        expect(bitwise_basics.bitwiseOR(9, 14)).to.equal('1111');
      });
    });

    describe( 'bitwise XOR', () => {
      it( 'should return the binary ^ of two integers', () => {
        // 1001 ^ 1110 = 0111
        expect(bitwise_basics.bitwiseXOR(9, 14)).to.equal('111');
      });
    });

    describe( 'bitwise NOT', () => {
      it( 'should return the binary NOT of two integers', () => {
        // ~1001 = 0110
        expect(bitwise_basics.bitwiseNOT(9)).to.equal('11111111111111111111111111110110');
      });
    });

    describe( 'bitwise Left Shift', () => {
      it( 'should return the binary left shift of a integer by n bits', () => {
        // 1001 << 2 = 100100
        expect(bitwise_basics.bitwiseLeftShift(9, 2)).to.equal('100100');
      });
    });

    describe( 'bitwise Sign Propagating Right Shift', () => {
      it( 'should return the binary right of a integers by n bits', () => {
        // 1001 >> 2 = 0010
        expect(bitwise_basics.bitwiseSignPropagatingRightShift(9, 2)).to.equal('10');
      });
    });

    describe( 'bitwise Zero Fill Right Shift', () => {
      it( 'should return the binary right shift of a integer by n bits', () => {
        // 1001 << 2 = 100100
        expect(bitwise_basics.bitwiseZeroFillRightShift(9, 2)).to.equal('10');
        // 11111111111111111111111111110111 >>> 2 = 1073741821
        expect(bitwise_basics.bitwiseZeroFillRightShift(-9, 2)).to.equal('111111111111111111111111111101');
      });
    });

    describe( 'bitwise is Even', () => {
      it( 'should return a boolean depending on whether n is even', () => {
        expect(bitwise_basics.isEven(9)).to.equal(false);
        expect(bitwise_basics.isEven(2)).to.equal(true);
      });
    });

    describe( 'bitwise is Odd', () => {
      it( 'should return a boolean depending on whether n is odd', () => {
        expect(bitwise_basics.isOdd(9)).to.equal(true);
        expect(bitwise_basics.isOdd(2)).to.equal(false);
      });
    });

    describe( 'bitwise dec2bin', () => {
      it( 'should return a binary equivent of n', () => {
        expect(bitwise_basics.dec2bin(9)).to.equal('1001');
        expect(bitwise_basics.dec2bin(2)).to.equal('10');
        expect(bitwise_basics.dec2bin(11)).to.equal('1011');
        expect(bitwise_basics.dec2bin(-1)).to.equal('11111111111111111111111111111111');
      });
    });

    describe( 'bitwise avgInt', () => {
      it( 'should return a boolean depending on whether n is odd', () => {
        // a + b / 2
        expect(bitwise_basics.avgInt(6, 12)).to.equal(9);
        expect(bitwise_basics.avgInt(2, 80)).to.equal(41);
        expect(bitwise_basics.avgInt(6, 1233)).to.equal(619);
        expect(bitwise_basics.avgInt(345345, 3234)).to.equal(174289);
        expect(bitwise_basics.avgInt(12643, 32222)).to.equal(22432);
        expect(bitwise_basics.avgInt(34444, 9999)).to.equal(22221);
      });
    });

    describe( 'bitwise plus One Int', () => {
      it( 'should return a boolean depending on whether n is odd', () => {
        expect(bitwise_basics.plusOneInt(9)).to.equal(10);
        expect(bitwise_basics.plusOneInt(2)).to.equal(3);
      });
    });

  });

  describe( 'Bitwise RGB HEX Binary', () => {

  });
});
