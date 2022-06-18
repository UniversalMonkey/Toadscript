class Rabbit extends Object {
    constructor(name) {
      super()
      this.name = name;
    }
  }
  
  let rabbit =  Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') ); // Ошибка