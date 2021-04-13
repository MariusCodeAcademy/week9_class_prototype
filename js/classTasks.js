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
console.groupCollapsed("1. Players");

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
console.groupCollapsed("2. Calculator");
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

class Employee {
  constructor(vardas, pavarde) {
    this.name = vardas;
    this.lastname = pavarde;
    this.fullName = vardas + " " + pavarde;
    this.email = `${vardas}.${pavarde}@company.com`.toLowerCase();
    this.getEmail();
  }
  getEmail() {
    this.email2 = `${this.name}.${this.lastname}@sony.com`.toLowerCase();
  }
}

let e1 = new Employee("James", "Bond");
let e2 = new Employee("Jae", "Doe");
console.groupCollapsed("3. Employee");
console.log("e1", e1);
console.log("e2", e2);
console.groupEnd();
console.log("");

// 4 sukuri klase Person ir tuscia compare metoda
// sukurimo metu priskiri varda ir amziu
// parasyti metoda kuri palygina esama asmeni su kitu ir grazina ar kitas
// asmuo yra vyresnis jaunes ar to paies amziaus

// const p1 = new Person("Bob", 24);
// const p2 = new Person("James", 27);

// p1.compare(p2); // -> Bob is younger than James
