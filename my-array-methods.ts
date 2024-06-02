const users = ["Паша", "Саша", "Маша", "Коля", "Толя", "Оля"];

function myMap(users: string[], func: any): string[] {
  const resultArrayUsers = [];
  for (let i = 0; i < users.length; i++) {
    const result = func(users[i]);
    resultArrayUsers.push(result);
  }
  return resultArrayUsers;
}

const arrayMyMap = myMap(users, (element: string, index: number) => {
  return element;
});

console.log(arrayMyMap);

function func(element: string, index: number): void {
  console.log(element, index);
}

function myForEach(users: string[], func: any): void {
  for (let i = 0; i < users.length; i++) {
    func(users[i], i);
  }
}

console.log(myForEach(users, func));

myForEach(
  ["Паша", "Саша", "Маша", "Коля", "Толя", "Оля"],
  (element: string, index: number): void => {
    console.log(element, index);
  }
);

let array = [-23, -43, 54, 2, 4, -67, 999];

function myFindIndex(array: number[], number: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(myFindIndex(array, 54));

function myLastIndexOf(array: number[], number: number): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(myLastIndexOf(array, 100));
