let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
    __proto__: table
  };
  
  let pockets = {
    money: 2000
    __proto__: bed
  };

  console.log(pockets.pen)


  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    stomach: []
    __proto__: hamster
  };

  speedy.eat("apple")
  console.log(speedy.stomach)

  console.log(lazy.stomach)