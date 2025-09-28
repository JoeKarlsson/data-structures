const chai = require('chai');

const { expect } = chai;

const ComplexArray = require('../complex-array/complex-array');

/**
 * Asserts that two arrays are equal
 * @param {Array} first - First array to compare
 * @param {Array} second - Second array to compare
 */
function assertArrayEquals(first, second) {
  const message = `${first} != ${second}`;

  first.forEach((item, i) => {
    expect(item).to.equal(second[i], message);
  });
}

describe('Complex Array', () => {
  describe('Consructor', () => {
    it('should construct from a number', () => {
      const a = new ComplexArray(10);

      expect(a).to.exist;
      expect(a.real.length).to.equal(10);
      expect(a.imag.length).to.equal(10);
      expect(a.real[0]).to.equal(0);
      expect(a.imag[0]).to.equal(0);
    });

    it('should construct from a number with a type', () => {
      const a = new ComplexArray(10, Int32Array);

      expect(a.ArrayType).to.equal(Int32Array);
      expect(a.real.length).to.equal(10);
      expect(a.imag.length).to.equal(10);
      expect(a.real[0]).to.equal(0);
      expect(a.imag[0]).to.equal(0);
    });

    it('should contruct from a real array', () => {
      const a = new ComplexArray([1, 2]);

      assertArrayEquals([1, 2], a.real);
      assertArrayEquals([0, 0], a.imag);
    });

    it('should contruct from a real array with a type', () => {
      const a = new ComplexArray([1, 2], Int32Array);

      expect(a.ArrayType).to.equal(Int32Array);
      assertArrayEquals([1, 2], a.real);
      assertArrayEquals([0, 0], a.imag);
    });

    it('should contruct from another complex array', () => {
      const a = new ComplexArray(new ComplexArray([1, 2]));

      assertArrayEquals([1, 2], a.real);
      assertArrayEquals([0, 0], a.imag);
    });
  });

  describe('`map` method', () => {
    it('should alter all values', () => {
      const a = new ComplexArray([1, 2]).map((value, i) => {
        value.real *= 10;
        value.imag = i;
      });

      assertArrayEquals([10, 20], a.real);
      assertArrayEquals([0, 1], a.imag);
    });
  });

  describe('`forEach` method', () => {
    it('should touch every value', () => {
      const a = new ComplexArray([1, 2]);
      a.imag[0] = 4;
      a.imag[1] = 8;

      let sum = 0;
      a.forEach((value, i) => {
        sum += value.real;
        sum += value.imag;
      });

      expect(sum).to.equal(15);
    });
  });

  describe('`conjugate` method', () => {
    it('should multiply a number', () => {
      const a = new ComplexArray([1, 2]);
      a.imag[0] = 1;
      a.imag[1] = -2;

      const b = a.conjugate();

      assertArrayEquals([1, 2], b.real);
      assertArrayEquals([-1, 2], b.imag);
    });
  });

  describe('`magnitude` method', () => {
    it('should give the an array of magnitudes', () => {
      const a = new ComplexArray([1, 3]);
      a.imag[0] = 0;
      a.imag[1] = 4;

      assertArrayEquals([1, 5], a.magnitude());
    });

    it('should return an iterable ArrayType object', () => {
      const a = new ComplexArray([1, 2]);

      let sum = 0;
      a.magnitude().forEach((value, i) => {
        sum += value;
      });

      expect(sum).to.equal(3);
    });
  });

});
