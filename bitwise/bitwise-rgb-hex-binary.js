// convert 0..255 R,G,B values to binary string
const RGBToBin = ( r, g, b ) => {
  const bin = r << 16 | g << 8 | b;
  return ((h) => {
    return new Array(25 - h.length).join( '0' ) + h;
  })(bin.toString(2));
};

// convert 0..255 R,G,B values to a hexidecimal color string
const RGBToHex = ( r, g, b ) => {
  const bin = r << 16 | g << 8 | b;
  return (( h ) => {
    return new Array(7 - h.length).join( '0' ) + h;
  })( bin.toString( 16 ).toUpperCase() );
};

// convert a 24 bit binary color to 0..255 R,G,B
const binToRGB = ( bin ) => {
  const pbin = parseInt( bin, 2 );
  const r = pbin >> 16;
  const g = pbin >> 8 & 0xFF;
  const b = pbin & 0xFF;
  return [r, g, b];
};

// convert a hexidecimal color string to 0..255 R,G,B
const hexToRGB = ( hex ) => {
  const r = hex >> 16;
  const g = hex >> 8 & 0xFF;
  const b = hex & 0xFF;
  return [r, g, b];
};

module.exports = {
  RGBToBin,
  RGBToHex,
  binToRGB,
  hexToRGB,
};

// source: https://gist.github.com/lrvick/2080648
