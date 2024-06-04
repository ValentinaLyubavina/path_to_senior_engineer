//learn.javascript.ru/closure

https: function sum(a) {
  return function sumTwo(b) {
    return a + b;
  };
}

console.log(sum(3)(3));

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(arr) {
  let result = [];
  for (let num of arr) {
    if (num > 3 && num < 6) {
      result.push(num);
    }
  }
  return result;
}

console.log(inBetween(arr));
