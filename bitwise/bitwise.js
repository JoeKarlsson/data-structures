function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
// Source: http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

const PLUS_ONE_INT = (n) => { // slower than ++
  return -~n;
}

// Source: https://gist.github.com/LeoDutra/63ca94fe86dcffee1bab