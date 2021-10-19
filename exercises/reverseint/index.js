// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (typeof n !== 'number') return;
  let a = Array.from(String(n), Number);

  let b = [];
  let c = [];
  for (let i = 0; i < a.length; i++) {
    b = a.splice(a.length - i - 1, 1, a[i]);
    c.push(b[0]);
  }

  if (isNaN(c[c.length - 1])) {
    c.pop();
    const result = c.join('');
    console.log(result * -1);
    return parseInt(result * -1);
  } else {
    const result = c.join('');
    console.log(result);
    return parseInt(result);
  }
}

module.exports = reverseInt;
