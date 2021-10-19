// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (typeof obj[str[i]] !== 'number') obj[str[i]] = 0;
    obj[str[i]]++;
  }

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

module.exports = maxChar;
