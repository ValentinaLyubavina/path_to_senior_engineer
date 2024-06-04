https://learn.javascript.ru/settimeout-setinterval

function printNumbers(from, to) {
  let num = from;
  num++;
  
  let timerId = setInterval(func() {
    console.log(num);
   if (num == to) {
    clearInterval(timerId)
  } }, 1000);
}

setTimeout(printNumbers, 1000, 1, 10);
