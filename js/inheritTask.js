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

// 3 sukurti klase Student kuri praplecia Person
// prideti papildoma savybe university
// course - title
// course year - kelintas kursas
class Student extends Person {
  constructor(birthYear, name, uni, title, courseYear) {
    super(birthYear, name);
    this.university = uni;
    this.courseTitle = title;
    this.studyYear = courseYear;
  }
  prisistatymas() {
    console.log(
      `Mano vardas ${this.firstName} as sutudijuoju ${this.university} universiteto, ${this.studyYear} kurse`
    );
  }
}

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
const p1 = new Person(1999, "James");
const p2 = new Person(1979, "Bob");
// atspausdinti gimimo metus
console.log("p1.birthYear", p1.birthYear);
console.log("p2.birthYear", p2.birthYear);

[p1, p2].forEach((personObj) => personObj.prisistatymas());

//3.1 sukurti 3 skirtingus studenus
const students = [
  new Student(1980, "kevin", "KTU", "WebDev", 1),
  new Student(1982, "Barbara", "VGTU", "Desin", 2),
  new Student(1986, "Michale", "KTU", "Python", 3),
];
// atspausdinti gimimo metus
students.forEach((stud) => console.log("stud.birthYear", stud.birthYear));

// perrasyti pasisveikinima ir atspausdinti
students[0].prisistatymas();

// 3.2 po to kai sukurtas studentas pakeisti kurso skaiciu i didesni.
students[0].studyYear = 3;
students[0].prisistatymas();

//4.1 sukurti 2 gyvunus ir atspausdinti gimimo metus
const mams = [new Mamal(2000, "Tiger"), new Mamal(2010, "Lion")];
console.log("mams", mams);

mams.forEach((gyv) => console.log("gyv.birthYear", gyv.birthYear));
