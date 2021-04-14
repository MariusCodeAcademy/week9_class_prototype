"use strict";
console.log("Inh tasks");

// 1 sukurti klase LivingThing
// kuri tures savybe birthYear
/**
 * Living thing tevine klase
 */
class LivingThing {
  constructor(year) {
    this.birthYear = year;
  }
}

// 2 sukurti klase Person kuri praplecia LivingThing()
// prideti papildoma savybe firstName
// prideti metoda prisistatymas()
class Person extends LivingThing {
  constructor(personYear, name) {
    // super - kvieca tevines klases contruct
    super(personYear);
    // pridedam papildoma savybe
    this.firstName = name;
  }
  prisistatymas() {
    console.log(`As esu ${this.firstName} ir gimiau ${this.birthYear} metais`);
  }
}
const p1 = new Person(1999, "James");
p1.prisistatymas();

// 3 sukurti klase Student kuri praplecia Person
// prideti papildoma savybe university
// course - title
// course year - kelintas kursas

// 4 sukurti klase Mamal kuri praplecia LivingThing
// prideti savybe rusis - kokia gyvuno rusis
class Mamal extends LivingThing {
  constructor(year, gyvRusis) {
    super(year);
    this.rusis = gyvRusis;
  }
}

//2.1 sukurti 2 asmenis
// atspausdinti ju gimimo metus
// atspausdinti prisistatyma

//3.1 sukurti 3 skirtingus studenus
// atspausdinti gimimo metus
// perrasyti pasisveikinima ir atspausdinti

// 3.2 po to kai sukurtas studentas pakeisti kurso skaiciu i didesni.

//4.1 sukurti 2 gyvunus ir atspausdinti gimimo metus
