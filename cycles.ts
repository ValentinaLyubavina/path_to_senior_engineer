for (let i = 100; i < 120; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

const array = [1, 3, 60, -76];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let year = 2024;
if (year % 400 === 0) {
  console.log("високосный");
} else if (year % 100 === 0) {
  console.log("невисокосный");
} else if (year % 4 === 0) {
  console.log("високосный");
} else {
  console.log("невисокосный");
}

let array3 = [2, 56, -3, 0, 100];
let max = array3[0];
for (let i = 0; i < array3.length; i++)
  if (array3[i] > max) {
    max = array3[i];
  }
console.log(max);

function moreThenPreviosNumber(array: number[]) {
  for (let i = 0; i < array.length; i++)
    if (array[i] > array[i - 1]) {
      console.log(array[i]);
    }
}
moreThenPreviosNumber(array3);

let range: number[] = [];
for (let i = 1; i <= 50; i++) {
  range.push(i);
}
console.log(range);
