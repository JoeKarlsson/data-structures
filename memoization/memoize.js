/*
  Memoization is a useful optimization technique for caching the results of function calls such that lengthy lookups or expensive recursive computations can be minimized where possible.
 */
Function.prototype.memoize = function() {
  let cache = {};

  return ( arg ) => {
    if(arg in cache) {
      console.log('Cache hit for ' + arg);
      return cache[arg];
    } else {
      console.log('Cache miss for ' + arg);
      return cache[arg] = this( arg );
    }
  }
};

// Test
function fooBar(x, y){
  return x
};

let memoFooBar = fooBar.memoize();
console.log('memoFooBar(1): ', memoFooBar(1, 2));
memoFooBar(1); // Cache miss
memoFooBar(1); // Cache hit :D
memoFooBar(2); // Cache miss

// Source: https://addyosmani.com/blog/faster-javascript-memoization/