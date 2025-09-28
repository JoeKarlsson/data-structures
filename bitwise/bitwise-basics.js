const bitwiseAND = (a, b) => (a & b).toString(2);

const bitwiseOR = (a, b) => (a | b).toString(2);

const bitwiseXOR = (a, b) => (a ^ b).toString(2);

const bitwiseNOT = (a) => (~a >>> 0).toString(2);

const bitwiseLeftShift = (a, bits) => (a << bits).toString(2);

const bitwiseSignPropagatingRightShift = (a, bits) => (a >> bits).toString(2);

const bitwiseZeroFillRightShift = (a, bits) => (a >>> bits).toString(2);

const isEven = (n) => !(n & 1);

const isOdd = (n) => ((n & 1) === 1);

const dec2bin = (dec) => (dec >>> 0).toString(2);
// Source: http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

const avgInt = (a, b) => // a + b / 2
  (a + b) >> 1;

const plusOneInt = (n) => // slower than ++
  -~n;
module.exports = {
  bitwiseAND,
  bitwiseOR,
  bitwiseXOR,
  bitwiseNOT,
  bitwiseLeftShift,
  bitwiseSignPropagatingRightShift,
  bitwiseZeroFillRightShift,
  isEven,
  isOdd,
  dec2bin,
  avgInt,
  plusOneInt,
};
