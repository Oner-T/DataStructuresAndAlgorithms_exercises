// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(arr, size) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let arr3 = [];
    for (let j = i * size; j < i * size + size; j++) {
      if (arr[j] === undefined) {
      } else {
        arr3.push(arr[j]);
      }
    }
    arr2.push(arr3);
  }
  arr2 = arr2.filter((e) => e.length);
  return arr2;
}

module.exports = chunk;
