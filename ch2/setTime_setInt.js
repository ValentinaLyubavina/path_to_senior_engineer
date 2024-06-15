function printNumbers(from, to) {
  let num = from;

  let timerId = setInterval(() => {
    console.log(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
}

console.log(printNumbers(1, 10));

function printNumbers2(from, to) {
  let number = from;

  if (number == to) {
    return number, console.log(number);
  } else {
    return setTimeout(() => {
      console.log(number);
      number++;
      printNumbers2(number, to);
    }, 1000);
  }
}

console.log(printNumbers2(1, 10));
