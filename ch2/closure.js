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

let arr2 = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
  return function (item) {
    return arr.includes(item);
  };
}

console.log(arr2.filter(inArray([1, 2, 10])));

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

function byField(key) {
  return function sortKey(a, b) {
    return a[key] > b[key] ? 1 : -1;
  };
}

console.log(users.sort(byField("name")));
