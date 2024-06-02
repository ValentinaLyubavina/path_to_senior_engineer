function getSquareArea(side: number): number {
  const s = side * side;
  return s;
}

const resultSA: number = getSquareArea(5);
console.log(resultSA);

function getRectangleArea(a: number, b: number): number {
  const s: number = a * b;
  return s;
}

const resultRA: number = getRectangleArea(7, 2);
console.log(resultRA);

function getTriangleArea(a: number, b: number) {
  const s = 0.5 * a * b;
  return s;
}

const resultTA = getTriangleArea(6, 3);
console.log(resultTA);

function getCircleArea(r: number) {
  const s: number = 3.14 * r ** 2;
  return s;
}

const resultCA = getCircleArea(3);
console.log(resultCA);

function getHexagonArea(a: number) {
  const s: number = ((a ** 2 * 3) / 2) * Math.sqrt(3);
  return s;
}

const resultHA = getHexagonArea(3);
console.log(resultHA);
