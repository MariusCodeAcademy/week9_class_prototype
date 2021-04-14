"use strict";
console.log("inheritance");

class User {
  constructor(vardas, amzius) {
    this.name = vardas;
    this.age = amzius;
  }
  greet() {
    console.log(`Sveiki mano vardas yra ${this.name} man yra ${this.age} metai`);
  }
}

const u1 = new User("Jone", 23);
u1.greet();
