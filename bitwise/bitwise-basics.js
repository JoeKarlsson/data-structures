const bitwiseAND = (a, b) => {
  return (a & b).toString(2);
};
bitwiseAND(9, 14); // 1001 & 1110 = 1000

const bitwiseOR = (a, b) => {
  return (a | b).toString(2);
};
bitwiseOR(9, 14); // 1001 | 1110 = 1111

const bitwiseXOR = (a, b) => {
  return (a ^ b).toString(2);
};
bitwiseXOR(9, 14); // 1001 ^ 1110 = 0111

const bitwiseNOT = (a) => {
  return (~a >>> 0).toString(2);
};
bitwiseNOT(9); // ~1001 = 0110

const bitwiseLeftShift = (a, bits) => {
  return (a << bits).toString(2);
};
bitwiseLeftShift(9, 2); // 1001 << 2 = 100100

const bitwiseSignPropagatingRightShift = (a, bits) => {
  return (a >> bits).toString(2);
};
bitwiseSignPropagatingRightShift(9, 2); // 1001 >> 2 = 0010

const bitwiseZeroFillRightShift = (a, bits) => {
  return (a >>> bits).toString(2);
};

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
