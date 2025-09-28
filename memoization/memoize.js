/*
  Memoization is a useful optimization technique for caching the results of function calls such that
  lengthy lookups or expensive recursive computations can be minimized where possible.
*/

Function.prototype.memoize = () => {
  const cache = {};

  return (arg) => {
    if (arg in cache) {
      // Cache Hit
      return cache[arg];
    }
    // Chache Miss
    cache[arg] = this(arg);
    return cache[arg];
  };
};

// Test
/**
 * Test function for memoization
 * @param {*} x - Input value
 * @returns {*} The input value
 */
function fooBar(x) {
  return x;
}

const memoFooBar = fooBar.memoize();
console.log('memoFooBar(1): ', memoFooBar(1));
memoFooBar(1); // Cache miss
memoFooBar(1); // Cache hit :D
memoFooBar(2); // Cache miss

// Source: https://addyosmani.com/blog/faster-javascript-memoization/
