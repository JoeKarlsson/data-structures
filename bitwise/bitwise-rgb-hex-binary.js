// convert 0..255 R,G,B values to binary string
const RGBToBin = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(25-h.length).join("0")+h
    })(bin.toString(2))
}

// convert 0..255 R,G,B values to a hexidecimal color string
const RGBToHex = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(7-h.length).join("0")+h
    })(bin.toString(16).toUpperCase())
}

// convert a 24 bit binary color to 0..255 R,G,B
const binToRGB = function(bin){
    var pbin = parseInt(bin,2);
    var r = pbin >> 16;
    var g = pbin >> 8 & 0xFF;
    var b = pbin & 0xFF;
    return [r,g,b];
}

// convert a hexidecimal color string to 0..255 R,G,B
const hexToRGB = function(hex){
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;
    return [r,g,b];
}

module.exports = {
  RGBToBin,
  RGBToHex,
  binToRGB,
  hexToRGB,
}

// convert some RGB color values to hex and to binary
// new Array(
//     [000,000,000], // black
//     [000,255,000], // green
//     [255,255,255]  // white
// ).forEach(function(rgb){
//     var hex = RGBToHex(rgb[0],rgb[1],rgb[2]);
//     var bin = RGBToBin(rgb[0],rgb[1],rgb[2]);
//     log('-> RGB: '+rgb+' \n<- HEX: '+hex+' \n<- BIN: '+bin+'\n\n');
// });

// // convert some hexidecimal color values to RGB
// new Array(
//     '000000', // black
//     '00FF00', // green
//     'FFFFFF'  // white
// ).forEach(function(hex){
//     var rgb = hexToRGB(parseInt(hex,16));
//     log('-> HEX: '+hex+' \n<- RGB: '+rgb+'\n\n');
// });

// // convert some 24 bit binary color values to RGB
// new Array(
//     '000000000000000000000000', // black
//     '000000001111111100000000', // green
//     '111111111111111111111111'  // white
// ).forEach(function(bin){
//     var rgb = binToRGB(bin);
//     log('-> BIN: '+bin+' \n<- RGB: '+rgb+'\n\n');
// });

// // source: https://gist.github.com/lrvick/2080648