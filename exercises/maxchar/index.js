// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//best way: !important
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  //character map:
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //for loop for object:
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function maxChar2(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (typeof obj[str[i]] !== 'number') obj[str[i]] = 0;
    obj[str[i]]++;
  }

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

module.exports = maxChar;
