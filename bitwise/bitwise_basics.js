const bitwiseAND = (a, b) => {
  return (a & b).toString(2);
}
bitwiseAND(9, 14); // 1001 & 1110 = 1000

const bitwiseOR = (a, b) => {
  return (a | b).toString(2);
}
bitwiseOR(9, 14); // 1001 | 1110 = 1111

const bitwiseXOR = (a, b) => {
  return (a ^ b).toString(2);
}
bitwiseXOR(9, 14); // 1001 ^ 1110 = 0111

const bitwiseNOT = (a) => {
  return (~a >>> 0).toString(2);
}
bitwiseNOT(9); // ~1001 = 0110

const bitwiseLeftShift = (a, bits) => {
  return (a << bits).toString(2);
}
bitwiseLeftShift(9, 2); // 1001 << 2 = 100100

const bitwiseSignPropagatingRightShift = (a, bits) => {
  return (a >> bits).toString(2);
}
bitwiseSignPropagatingRightShift(9, 2); // 1001 >> 2 = 0010

const bitwiseZeroFillRightShift = (a, bits) => {
  return (a >>> bits).toString(2);
}
bitwiseZeroFillRightShift(9, 2); // 1001 >>> 2 = 0010
bitwiseZeroFillRightShift(-9, 2); // 11111111111111111111111111110111 >>> 2 = 1073741821