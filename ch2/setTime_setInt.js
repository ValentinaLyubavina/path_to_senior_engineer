https://learn.javascript.ru/settimeout-setinterval

function printNumbers(from, to) {
  let num = from;
  num++;
  
  let timerId = setInterval(() {
    console.log(num);
   if (num == to) {
    clearInterval(timerId)
   }}, 1000);
}

console.log(printNumbers(1,10))

function printNumbers2(from, to) {
  let number = from
  number++

  if (number == to) {
    return number
  } else {
    return setTimeout(() {
      console.log(number);
    }, 1000) 
  }
}

console.log(printNumbers2(1,10))