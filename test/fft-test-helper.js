const chai = require('chai');
const fftMod = require('../fast-fourier-transforms/fft');
const ComplexArray = require('../complex-array/complex-array');

const { FFT, InvFFT } = fftMod;
const { expect } = chai;

const EPSILON = 1e-4;
const { PI } = Math;

/**
 * Asserts that two complex arrays are approximately equal
 * @param {ComplexArray} first - First complex array
 * @param {ComplexArray} second - Second complex array
 */
function assertComplexArraysAlmostEqual(first, second) {
  const message = `${second} != ${first}`;

  expect(first.length).to.equal(second.length, message);

  first.forEach((value, i) => {
    assertApproximatelyEqual(value.real, second.real[i], message);
    assertApproximatelyEqual(value.imag, second.imag[i], message);
  });
}

/**
 * Asserts that FFT result matches expected output
 * @param {ComplexArray} original - Original input
 * @param {ComplexArray} expected - Expected FFT output
 */
function assertFFTMatches(original, expected) {
  if (!(expected instanceof ComplexArray)) {
    throw TypeError('expected match should be a ComplexArray');
  }

  const copy = new ComplexArray(original);
  const transformed = FFT(original);
  assertComplexArraysAlmostEqual(expected, transformed);
  assertComplexArraysAlmostEqual(copy, InvFFT(transformed));
}

/**
 * Asserts that FFT matches DFT for given input
 * @param {Array|ComplexArray} input - Input to test
 */
function assertFFTMatchesDFT(input) {
  input = new ComplexArray(input);

  assertComplexArraysAlmostEqual(DFT(input), FFT(input));
}

/**
 * Discrete Fourier Transform implementation for testing
 * @param {ComplexArray} input - Input complex array
 * @returns {ComplexArray} DFT result
 */
function DFT(input) {
  const n = input.length;
  const amplitude = 1 / Math.sqrt(n);

  if (!(input instanceof ComplexArray)) {
    input = new ComplexArray(input);
  }
  const output = new ComplexArray(input);

  for (let i = 0; i < n; i++) {
    output.real[i] = 0, output.imag[i] = 0;
    const phase = { real: 1, imag: 0 };
    const delta = { real: Math.cos(2 * PI * i / n), imag: Math.sin(2 * PI * i / n) };

    for (let j = 0; j < n; j++) {
      output.real[i] += phase.real * input.real[j] - phase.imag * input.imag[j];
      output.imag[i] += phase.real * input.imag[j] + phase.imag * input.real[j];
      [phase.real, phase.imag] = [
        phase.real * delta.real - phase.imag * delta.imag,
        phase.real * delta.imag + phase.imag * delta.real,
      ];
    }
    output.real[i] *= amplitude;
    output.imag[i] *= amplitude;
  }

  return output;
}

/**
 * Asserts that two numbers are approximately equal within epsilon
 * @param {number} first - First number
 * @param {number} second - Second number
 * @param {string} message - Error message
 */
function assertApproximatelyEqual(first, second, message) {
  const delta = Math.abs(first - second);

  expect(delta < EPSILON).to.be.true;
}

module.exports = {
  assertComplexArraysAlmostEqual,
  assertFFTMatches,
  assertFFTMatchesDFT,
  DFT,
};
