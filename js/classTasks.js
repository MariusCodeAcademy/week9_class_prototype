"use strict";
console.log("ClassTasks");

// 1 Sukurti zaidejo klase
// noresim kad kiekvienas zaidejas turetu name, age, height, weight
// sukurti metodus kurie grazina
// Varda su Amzium
// Varda su ugiu
// Varda su svoriu

class Player {
  constructor(vardas, amzius, ugis, svoris) {
    this.name = vardas;
    this.age = amzius;
    this.height = ugis;
    this.weight = svoris;
  }

  getAge() {
    return `${this.name} is ${this.age} years old`;
  }

  getHeight() {
    let heightInM = this.height / 100;
    // return `${this.name} is ${this.height} cm height`;
    return `${this.name} is ${heightInM} m height`;
  }

  getWeight() {
    return `${this.name} weights ${this.weight} kg`;
  }
}

let pl1 = new Player("James", 35, 180, 75);
console.group("Players");

console.log(pl1.getAge());
console.log(pl1.getHeight());
console.log(pl1.getWeight());
console.groupEnd();
console.log("");

// 2 padaryti skaiciuotuva
// skaiciuotuvas atliks 4 operacijas
class Calculator {
  constructor() {}
  // sudetis
  add(num1, num2) {
    return num1 + num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
}

// susikuriam skaicuotuvo objekta
let calc = new Calculator();
console.group("Calculator");
console.log("calc.add(10, 5) ->", calc.add(10, 5));
console.log("calc.multiply(10, 5) ->", calc.multiply(10, 5));
console.log("calc.divide(10, 5) ->", calc.divide(10, 5));
console.log("calc.subtract(10, 5) ->", calc.subtract(10, 5));
console.groupEnd();
console.log("");

// 3 Sukurti darbuotojo klase
// sukuriant nauja darbuotoja mes paduodam argumentais varda ir pavarde
// Darbuotojo klase turetu tureti sias savybes
// name, lastName, fullName, email - name.lastName@compaty.com visos mazosios raides
