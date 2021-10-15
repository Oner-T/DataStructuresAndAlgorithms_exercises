// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
const str = 'good morning';
function reverse(str) {
  const reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    reverse.push(element);
  }
  const reverseString = reverse.join('');
  return reverseString;
}

module.exports = reverse;
