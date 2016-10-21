/*
  Memoization is a useful optimization technique for caching the results of function calls such that lengthy lookups or expensive recursive computations can be minimized where possible.
 */
Function.prototype.memoize = function(){
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

function fooBar(x){
  return x
};

let memoFooBar = fooBar.memoize();
memoFooBar(1); // Cache miss
memoFooBar(1); // Cache hit :D
memoFooBar(2); // Cache miss

// Source: https://addyosmani.com/blog/faster-javascript-memoization/