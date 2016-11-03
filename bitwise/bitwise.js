const isEven = (n) => {
  return !(n & 1);
};

const isOdd = (n) => {
  return ((n & 1) == 1);
};

const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
};
// Source: http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

const avgInt = (a, b) => { // a + b / 2
  return (a + b) >> 1;
}

const plusOneInt = (n) => { // slower than ++
  return -~n;
};

console.log('plusOneInt(9): ', plusOneInt(9));
// Source: https://gist.github.com/LeoDutra/63ca94fe86dcffee1bab