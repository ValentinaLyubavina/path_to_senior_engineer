function sumTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumTo(5));

function recSumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + recSumTo(n - 1);
  }
}
console.log(recSumTo(13));

function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));
