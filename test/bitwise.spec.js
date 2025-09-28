const chai = require('chai');
const bitwise_basics = require('../bitwise/bitwise-basics');
const bitwise_rgb_hex_binary = require('../bitwise/bitwise-rgb-hex-binary');

const { expect } = chai;

describe('Bitwise', () => {
  describe('Bitwise Basics', () => {
    describe('bitwise AND', () => {
      it('should return the binary & of two integers', () => {
        // 1001 & 1110 = 1000
        expect(bitwise_basics.bitwiseAND(9, 14)).to.equal('1000');
      });
    });
    describe('bitwise OR', () => {
      it('should return the binary | of two integers', () => {
        // 1001 | 1110 = 1111
        expect(bitwise_basics.bitwiseOR(9, 14)).to.equal('1111');
      });
    });
    describe('bitwise XOR', () => {
      it('should return the binary ^ of two integers', () => {
        // 1001 ^ 1110 = 0111
        expect(bitwise_basics.bitwiseXOR(9, 14)).to.equal('111');
      });
    });
    describe('bitwise NOT', () => {
      it('should return the binary NOT of two integers', () => {
        // ~1001 = 0110
        expect(bitwise_basics.bitwiseNOT(9)).to.equal('11111111111111111111111111110110');
      });
    });
    describe('bitwise Left Shift', () => {
      it('should return the binary left shift of a integer by n bits', () => {
        // 1001 << 2 = 100100
        expect(bitwise_basics.bitwiseLeftShift(9, 2)).to.equal('100100');
      });
    });
    describe('bitwise Sign Propagating Right Shift', () => {
      it('should return the binary right of a integers by n bits', () => {
        // 1001 >> 2 = 0010
        expect(bitwise_basics.bitwiseSignPropagatingRightShift(9, 2)).to.equal('10');
      });
    });
    describe('bitwise Zero Fill Right Shift', () => {
      it('should return the binary right shift of a integer by n bits', () => {
        // 1001 << 2 = 100100
        expect(bitwise_basics.bitwiseZeroFillRightShift(9, 2)).to.equal('10');
        // 11111111111111111111111111110111 >>> 2 = 1073741821
        expect(bitwise_basics.bitwiseZeroFillRightShift(-9, 2)).to.equal('111111111111111111111111111101');
      });
    });
    describe('bitwise is Even', () => {
      it('should return a boolean depending on whether n is even', () => {
        expect(bitwise_basics.isEven(9)).to.equal(false);
        expect(bitwise_basics.isEven(2)).to.equal(true);
      });
    });
    describe('bitwise is Odd', () => {
      it('should return a boolean depending on whether n is odd', () => {
        expect(bitwise_basics.isOdd(9)).to.equal(true);
        expect(bitwise_basics.isOdd(2)).to.equal(false);
      });
    });
    describe('bitwise dec2bin', () => {
      it('should return a binary equivent of n', () => {
        expect(bitwise_basics.dec2bin(9)).to.equal('1001');
        expect(bitwise_basics.dec2bin(2)).to.equal('10');
        expect(bitwise_basics.dec2bin(11)).to.equal('1011');
        expect(bitwise_basics.dec2bin(-1)).to.equal('11111111111111111111111111111111');
      });
    });
    describe('bitwise avgInt', () => {
      it('should return a the average of two ints', () => {
        // a + b / 2
        expect(bitwise_basics.avgInt(6, 12)).to.equal(9);
        expect(bitwise_basics.avgInt(2, 80)).to.equal(41);
        expect(bitwise_basics.avgInt(6, 1233)).to.equal(619);
        expect(bitwise_basics.avgInt(345345, 3234)).to.equal(174289);
        expect(bitwise_basics.avgInt(12643, 32222)).to.equal(22432);
        expect(bitwise_basics.avgInt(34444, 9999)).to.equal(22221);
      });
    });
    describe('bitwise plus One Int', () => {
      it('should return a int plus 1', () => {
        expect(bitwise_basics.plusOneInt(9)).to.equal(10);
        expect(bitwise_basics.plusOneInt(2)).to.equal(3);
      });
    });
  });
  describe('Bitwise RGB HEX Binary', () => {
    describe('RGB', () => {
      let RGBarr;

      beforeEach(() => {
        RGBarr = [
          [0, 0, 0], // black
          [0, 255, 0], // green
          [255, 255, 255] // white
        ];
      });
      describe('To Bin', () => {
        it('should convert a RGB value to Binary', () => {
          const bin = [];
          // convert some RGB color values to hex and to binary
          RGBarr.forEach((rgb) => {
            bin.push(bitwise_rgb_hex_binary.RGBToBin(rgb[0], rgb[1], rgb[2]));
          });
          // black
          expect(bin[0]).to.equal('000000000000000000000000');
          // green
          expect(bin[1]).to.equal('000000001111111100000000');
          // white
          expect(bin[2]).to.equal('111111111111111111111111');

        });
      });
      describe('To Hex', () => {
        it('should convert a RGB value to Hex', () => {
          const bin = [];
          // convert some RGB color values to hex and to hex
          RGBarr.forEach((rgb) => {
            bin.push(bitwise_rgb_hex_binary.RGBToHex(rgb[0], rgb[1], rgb[2]));
          });
          // black
          expect(bin[0]).to.equal('000000');
          // green
          expect(bin[1]).to.equal('00FF00');
          // white
          expect(bin[2]).to.equal('FFFFFF');
        });
      });
    });
    describe('Hex', () => {
      let HexArr;

      beforeEach(() => {
        HexArr = [
          '000000', // black
          '00FF00', // green
          'FFFFFF' // white
        ];
      });
      describe('To RGB', () => {
        it('should convert a HEX value to RGB', () => {
          const rgb = [];
          // convert a hexidecimal color string to 0..255 R,G,B
          HexArr.forEach((hex) => {
            rgb.push(bitwise_rgb_hex_binary.hexToRGB(parseInt(hex, 16)));
          });
          // black
          expect(rgb[0]).to.deep.equal([0, 0, 0]);
          // green
          expect(rgb[1]).to.deep.equal([0, 255, 0]);
          // white
          expect(rgb[2]).to.deep.equal([255, 255, 255]);
        });
      });
    });
    describe('Binart', () => {
      let binArr;

      beforeEach(() => {
        binArr = [
          '000000000000000000000000', // black
          '000000001111111100000000', // green
          '111111111111111111111111' // white
        ];
      });
      describe('To RGB', () => {
        it('should convert a binary value to RGB', () => {
          const rgb = [];
          // convert a hexidecimal color string to 0..255 R,G,B
          binArr.forEach((bin) => {
            rgb.push(bitwise_rgb_hex_binary.binToRGB(bin));
          });
          // black
          expect(rgb[0]).to.deep.equal([0, 0, 0]);
          // green
          expect(rgb[1]).to.deep.equal([0, 255, 0]);
          // white
          expect(rgb[2]).to.deep.equal([255, 255, 255]);

        });
      });
    });
  });
});
