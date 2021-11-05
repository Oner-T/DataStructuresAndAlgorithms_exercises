// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk2(arr, size) {
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

function chunk(arr, size) {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}



function chunk3(arr, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
