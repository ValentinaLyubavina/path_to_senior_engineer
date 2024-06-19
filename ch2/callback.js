function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function filterArray(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) newArray.push(arr[i]);
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], isOdd));
