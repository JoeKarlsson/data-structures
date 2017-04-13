const primeBase = 101; // Any large prime number

// Rolling Hash Function using The Rabin fingerprint method
// I.E - The hash of the first substring, "abr", using 101 as a base is:
//
// ASCII a = 97, b = 98, r = 114.
// hash("abr") = (97 × 1012) + (98 × 1011) + (114 × 1010) = 999,509
const hashFromTo = ( str, from, to ) => {
  let hash = 0; // init hash
  for (let i = from; i < to && i < str.length; i++) {
    const charASCII = str.charCodeAt(i);
    hash = primeBase * hash + charASCII;
  }
  return hash;
};

const matchesAtIndex = (index, text, str) => {
  let matches = true;

  for (let j = 0; j < str.length; j++) {
    if (text[index + j] !== str[j]) {
      matches = false;
      break;
    }
  }
  return matches;
};

/**
 * Returns an array of indexes of the places where the str is found within text
 * @param  {String} text
 * @param  {String} str
 * @return {Array[num]}
 */
const searchRabinKarp = ( text, str ) => {
  const matches = [];

  const hashStr = hashFromTo(str, 0, str.length); // hash the substring
  const primeToPower = Math.pow(primeBase, str.length);
  const maxIndexForPotentialMatch = text.length - str.length;
  // init text has of the length of the substring
  let hashTextPart = hashFromTo(text, 0, str.length);

  for (let i = 0; i <= maxIndexForPotentialMatch; i++) {
    if ( hashTextPart === hashStr ) {
      // if there is a hash match - we need to verify this is
      // a valid match by manually checking it
      if (matchesAtIndex(i, text, str)) {
        matches.push(i);
      }
    }
    // Update rolling hash
    // s[i+1..i+m] = s[i..i+m-1] - s[i] + s[i+m]
    const charASCII = text.charCodeAt(i + str.length);
    hashTextPart = primeBase * hashTextPart - primeToPower * text.charCodeAt(i) + charASCII;
  }

  return matches;
};

const str = 'abaacadabra';
const subStr = 'abaaa';
const hashStr = searchRabinKarp(str, subStr);
console.log(hashStr);

module.exports = searchRabinKarp;