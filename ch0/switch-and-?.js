const spainCapital = "Valencia";
let isCorrectAnswer;

switch (spainCapital === "Madrid") {
  case "One":
    console.log("isCorrectAnswer = true");
    break;
  case "Two":
    spainCapital === "madrid";
    console.log("isCorrectAnswer = true");
    break;
  case "Three":
    spainCapital === "MADRID";
    console.log("isCorrectAnswer = true");
    break;
  default:
    console.log("isCorrectAnswer = false");
}

const a = 1;
const b = 2;
let result = a + b < 4 ? "Мало" : "Много";

console.log({ result });
