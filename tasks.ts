export {};

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 18, 19, 20, 30];

function evenNumbers(array: number[]): number[] {
  const result: number[] = [];
  for (let i = 1; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  return array;
}

const resultEN = evenNumbers(array);

function notEvenNumbers(array: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < array.length + 1; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  return array;
}

const resultNEN = notEvenNumbers(array);

function filtredArray(array: number[]): number[] {
  const result: number[] = [];
  for (let i = 10; i < 20; i++) {
    if (i > 10 && i < 20) {
      console.log(i);
    }
  }
  return array;
}

const resultFA = filtredArray(array);

const avarage = [2, 56, 83, -34];
function sum(array: number[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let result = sum / array.length;
  return result;
}
console.log(sum(avarage));

let a = 5;
let b = 10;
let temp = a;
(a = b), (b = temp);
console.log(b);

[a, b] = [b, a];
console.log(a);
