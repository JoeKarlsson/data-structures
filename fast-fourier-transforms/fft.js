const baseComplexArray = require('../complex-array/complex-array');

// Math constants and functions we need.
const { PI } = Math;
const { SQRT1_2 } = Math;

/**
 * Performs Fast Fourier Transform on input data
 * @param {Array|ComplexArray} input - Input data to transform
 * @returns {ComplexArray} Transformed complex array
 */
function FFT(input) {
  return ensureComplexArray(input).FFT();
}

/**
 * Performs Inverse Fast Fourier Transform on input data
 * @param {Array|ComplexArray} input - Input data to transform
 * @returns {ComplexArray} Inverse transformed complex array
 */
function InvFFT(input) {
  return ensureComplexArray(input).InvFFT();
}

/**
 * Applies frequency domain filtering to input data
 * @param {Array|ComplexArray} input - Input data to filter
 * @param {Function} filterer - Filter function to apply
 * @returns {ComplexArray} Filtered complex array
 */
function frequencyMap(input, filterer) {
  return ensureComplexArray(input).frequencyMap(filterer);
}

class ComplexArray extends baseComplexArray {
  /**
   * Performs Fast Fourier Transform on this complex array
   * @returns {ComplexArray} Transformed complex array
   */
  FFT() {
    return fft(this, false);
  }

  /**
   * Performs Inverse Fast Fourier Transform on this complex array
   * @returns {ComplexArray} Inverse transformed complex array
   */
  InvFFT() {
    return fft(this, true);
  }

  /**
   * Applies a frequency-space filter to input, and returns the real-space filtered input
   * @param {Function} filterer - Filter function that accepts freq, i, n and modifies freq.real and freq.imag
   * @returns {ComplexArray} Filtered complex array
   */
  frequencyMap(filterer) {
    return this.FFT().map(filterer).InvFFT();
  }
}

/**
 * Ensures input is a ComplexArray instance
 * @param {Array|ComplexArray} input - Input to convert
 * @returns {ComplexArray} ComplexArray instance
 */
function ensureComplexArray(input) {
  return input instanceof ComplexArray && input || new ComplexArray(input);
}

/**
 * Performs FFT using appropriate algorithm based on input length
 * @param {ComplexArray} input - Input complex array
 * @param {boolean} inverse - Whether to perform inverse FFT
 * @returns {ComplexArray} Transformed complex array
 */
function fft(input, inverse) {
  const n = input.length;

  if (n & (n - 1)) {
    return FFT_Recursive(input, inverse);
  }
  return FFT_2_Iterative(input, inverse);

}

/**
 * Recursive FFT implementation for non-power-of-2 lengths
 * @param {ComplexArray} input - Input complex array
 * @param {boolean} inverse - Whether to perform inverse FFT
 * @returns {ComplexArray} Transformed complex array
 */
function FFT_Recursive(input, inverse) {
  const n = input.length;

  if (n === 1) {
    return input;
  }

  const output = new ComplexArray(n, input.ArrayType);

  // Use the lowest odd factor, so we are able to use FFT_2_Iterative in the
  // recursive transforms optimally.
  const p = LowestOddFactor(n);
  const m = n / p;
  const normalisation = 1 / Math.sqrt(p);
  let recursive_result = new ComplexArray(m, input.ArrayType);

  // Loops go like O(n Σ p_i), where p_i are the prime factors of n.
  // for a power of a prime, p, this reduces to O(n p log_p n)
  for (let j = 0; j < p; j++) {
    for (let i = 0; i < m; i++) {
      recursive_result.real[i] = input.real[i * p + j];
      recursive_result.imag[i] = input.imag[i * p + j];
    }
    // Don't go deeper unless necessary to save allocs.
    if (m > 1) {
      recursive_result = fft(recursive_result, inverse);
    }

    const del_f_r = Math.cos(2 * PI * j / n);
    const del_f_i = (inverse ? -1 : 1) * Math.sin(2 * PI * j / n);
    let f_r = 1;
    let f_i = 0;

    for (let i = 0; i < n; i++) {
      const _real = recursive_result.real[i % m];
      const _imag = recursive_result.imag[i % m];

      output.real[i] += f_r * _real - f_i * _imag;
      output.imag[i] += f_r * _imag + f_i * _real;

      [f_r, f_i] = [
        f_r * del_f_r - f_i * del_f_i,
        f_i = f_r * del_f_i + f_i * del_f_r,
      ];
    }
  }

  // Copy back to input to match FFT_2_Iterative in-placeness
  // TODO: faster way of making this in-place?
  for (let i = 0; i < n; i++) {
    input.real[i] = normalisation * output.real[i];
    input.imag[i] = normalisation * output.imag[i];
  }

  return input;
}

/**
 * Iterative FFT implementation for power-of-2 lengths
 * @param {ComplexArray} input - Input complex array
 * @param {boolean} inverse - Whether to perform inverse FFT
 * @returns {ComplexArray} Transformed complex array
 */
function FFT_2_Iterative(input, inverse) {
  const n = input.length;

  const output = BitReverseComplexArray(input);
  const output_r = output.real;
  const output_i = output.imag;
  // Loops go like O(n log n):
  //   width ~ log n; i,j ~ n
  let width = 1;
  while (width < n) {
    const del_f_r = Math.cos(PI / width);
    const del_f_i = (inverse ? -1 : 1) * Math.sin(PI / width);
    for (let i = 0; i < n / (2 * width); i++) {
      let f_r = 1;
      let f_i = 0;
      for (let j = 0; j < width; j++) {
        const l_index = 2 * i * width + j;
        const r_index = l_index + width;

        const left_r = output_r[l_index];
        const left_i = output_i[l_index];
        const right_r = f_r * output_r[r_index] - f_i * output_i[r_index];
        const right_i = f_i * output_r[r_index] + f_r * output_i[r_index];

        output_r[l_index] = SQRT1_2 * (left_r + right_r);
        output_i[l_index] = SQRT1_2 * (left_i + right_i);
        output_r[r_index] = SQRT1_2 * (left_r - right_r);
        output_i[r_index] = SQRT1_2 * (left_i - right_i);

        [f_r, f_i] = [
          f_r * del_f_r - f_i * del_f_i,
          f_r * del_f_i + f_i * del_f_r,
        ];
      }
    }
    width <<= 1;
  }

  return output;
}

/**
 * Reverses the bit order of an index for FFT
 * @param {number} index - Index to reverse
 * @param {number} n - Length of array
 * @returns {number} Bit-reversed index
 */
function BitReverseIndex(index, n) {
  let bitreversed_index = 0;

  while (n > 1) {
    bitreversed_index <<= 1;
    bitreversed_index += index & 1;
    index >>= 1;
    n >>= 1;
  }
  return bitreversed_index;
}

/**
 * Reverses the bit order of a complex array for FFT
 * @param {ComplexArray} array - Array to reverse
 * @returns {ComplexArray} Bit-reversed array
 */
function BitReverseComplexArray(array) {
  const n = array.length;
  const flips = new Set();

  for (let i = 0; i < n; i++) {
    const r_i = BitReverseIndex(i, n);

    if (flips.has(i)) continue;

    [array.real[i], array.real[r_i]] = [array.real[r_i], array.real[i]];
    [array.imag[i], array.imag[r_i]] = [array.imag[r_i], array.imag[i]];

    flips.add(r_i);
  }

  return array;
}

/**
 * Finds the lowest odd factor of a number
 * @param {number} n - Number to factor
 * @returns {number} Lowest odd factor
 */
function LowestOddFactor(n) {
  const sqrt_n = Math.sqrt(n);
  let factor = 3;

  while (factor <= sqrt_n) {
    if (n % factor === 0) return factor;
    factor += 2;
  }
  return n;
}

module.exports = {
  FFT,
  InvFFT,
  frequencyMap,
  ComplexArray,
};
