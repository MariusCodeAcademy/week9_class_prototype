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
class Person {
  constructor(vardas, amzius) {
    this.name = vardas;
    this.age = amzius;
  }
  compare(other) {
    console.log("compare 1 ");
    // console.log("other", other);
    // console.log("this", this);
    if (this.age < other.age) return `${this.name} is younger than ${other.name}`;
    if (this.age > other.age) return `${this.name} is older than ${other.name}`;
    if (this.age === other.age) return `${this.name} is same age as ${other.name}`;
  }
}
const p1 = new Person("Bob", 24);
const p2 = new Person("James", 27);
const p3 = new Person("Jane", 24);

// p1.compare(p2); // -> Bob is younger than James
console.groupCollapsed("4. Compare ages");
console.log("p1.compare(p2)", p1.compare(p2));
console.log("p2.compare(p1)", p2.compare(p1));
console.log("p3.compare(p1)", p3.compare(p1));
console.groupEnd();
console.log("");

// 5 Sukurti Apskritimo klase
// klase argumetu pasiima spinduli
// ir klase turi 2 metodus
// getArea() Pi r kvadratu
//ir getPerimeter() 2 Pi r

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.area = this.getArea();
    this.perimeter = this.getPerimeter();
  }

  getArea() {
    let area = Math.PI * this.radius ** 2;
    return area.toFixed(2);
  }

  getPerimeter() {
    let perimeter = 2 * Math.PI * this.radius;
    return perimeter.toFixed(2);
  }
}
const c1 = new Circle(3);
const c2 = new Circle(10);
console.groupCollapsed("5.Sukurti Apskritimo klase");
console.log("c1.getArea()", c1.getArea());
console.log("c1.getPerimeter()", c1.getPerimeter());
console.log("c2.getArea()", c2.getArea());
console.log("c2.getPerimeter()", c2.getPerimeter());
console.log("c1", c1);

console.groupEnd();
console.log("");
// sukurti pora apskritimo objektu ir atspausdinti plota ir perimetra;

// 6.
// Sukurti nauja klase Name,
// ji argumentu pasiima name ir lastName
// sukurus nauja objekta klase turetu tureti sugeneruotas sias savybes
/* 
// new Name("john", "SMITH")
new Name("jAMES", "BroWN")
fname ➞ "John"
lname ➞ "Smith"
fullname ➞ "John Smith"
initials ➞ "J.S."
*/
class Name {
  constructor(argName, argLastname) {
    // debugger;
    this.name = argName;
    this.fname = this.makeCapital(argName);
    this.lname = this.makeCapital(argLastname);
    this.fullName = this.fname + " " + this.lname;
    this.initials = this.makeInit();
  }

  // pagalbinis metodas gauti capital case zodi
  makeCapital(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  // pagalbnis metodas gauti inicialam
  makeInit() {
    return `${this.fname.charAt(0)}.${this.lname.charAt(0)}.`;
  }
}
const n1 = new Name("jOHn", "SMITH");
const n2 = new Name("BOB", "JONES");
n2.makeCapital("asdasdasd") = "green";
console.log("n1", n1);

// 7. Sukurti klase kuri myTime
// clase turi tureti metodus
// paversti minutes i valandas
// paversti sekundes i min
// paversti valandas i dienas
// paversti dienas i savaites
// panaudojan turimus metodus =========
// paversi sekundes i dienas
// paversi valandas i savaites

class MyTime {
  constructor() {}

  minToHours(min) {
    return min / 60;
  }
}

// 8 uzd
/*
Sukurti Kavines klase 
kavine priima 3 argumentus name, menu, orders
name bus kavines pavadinimas
meniu bus masyvas su maistu
orders tuscias masyvas uzsakymams

sukurti metodus 
cheapestItem()
foodOnly()
drinksOnly()
addOrder("Kava")  ideti preke i order
amountToPay() uz kokia suma yra orderyje
buy() - grazinti kokia suma sumoketi ir isvalyti order
listOrders() - grazina ka turime krepselyje 
*/
const menu1 = [
  { item: "Kava", type: "gerimas", price: 1.99 },
  { item: "Kakava", type: "gerimas", price: 1.89 },
  { item: "Salta Arbata", type: "gerimas", price: 1.59 },
  { item: "Sumustinis su vistiena", type: "maistas", price: 2.59 },
  { item: "Sumustinis su tunu", type: "maistas", price: 2.19 },
  { item: "Desrainis", type: "maistas", price: 3.59 },
];
