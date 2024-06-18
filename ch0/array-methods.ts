let numbers: number[] = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

function mainCode(array: number[]) {
  const evenNumbers: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0 && evenNumbers.length < 3) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

console.log(mainCode(numbers));

const users = ["Паша", "Саша", "Маша", "Коля", "Толя", "Оля"];

users.forEach(function (item) {
  console.log(item);
});

const auto = ["bmw", "audi", "volvo"];

auto.splice(2, 1, "Volkswagen");
console.log(auto);

const fruits = ["apple", "orange", "lemon"];
let newFruits = fruits.slice(0, 2);
console.log(newFruits);

console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
console.log(fruits.lastIndexOf("nnj"));
console.log(fruits.includes("coconut"));
console.log(fruits.includes("lem"));
console.log(fruits.includes("lemon"));

let array = [-23, -43, 54, 2, 4, -67, 999];

console.log(array.reverse());

let moreThenZero = array.find(function (element) {
  const moreZero = element > 0;
  return moreZero;
});
console.log(moreThenZero);

let arrayMoreThenZero = array.filter(function (item) {
  const arrayMoreZero = item > 0;
  return arrayMoreZero;
});
console.log(arrayMoreThenZero);

let LessThenZero = array.some(function (number) {
  const LessZero = number > 0;
  return LessZero;
});
console.log(LessThenZero);

console.log(array.fill(0));
export {};
