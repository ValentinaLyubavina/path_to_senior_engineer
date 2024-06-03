let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
console.log(user.name);

delete user.name;
console.log(user.name);

let person = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(person));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
function sumSalaries(object) {
  for (let key in object) {
    sum += object[key];
  }
  return sum;
  if ((sum = 0)) {
    return false;
  }
}
console.log(sumSalaries(salaries));

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(object) {
  for (let key in object) {
    return object[key] * 2;
  }
}

console.log(multiplyNumeric(menu));
