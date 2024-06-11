let head = {
  glasses: 1,
};

let table = Object.create(head);
table.pen = 3;

let bed = Object.create(table);
bed.heet = 1;
bed.pillow = 2;

let pockets = Object.create(bed);
pockets.money = 2000;

console.log(pockets.pen);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = Object.create(hamster);

let lazy = Object.create(hamster);
lazy.stomach = [];

console.log(lazy.stomach);

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
