"use strict";
console.log("inherit people");

// 1  Sukurti klase Person
// parametru paduosim name, surname, idCode, age, sex
// sukurti papildoma getteri fullName (vardas pavarde)
// skaiciuoti kiek bus sukurta objektu pagal klase
// sugeneruoti dijanti Id kiekvienam objektui

class Person {
  constructor({ name, surname, idCode, age, sex }) {
    this.name = name;
    this.surname = surname;
    this.idCode = idCode;
    this.age = age;
    this.age = age;
    this.sex = sex;
  }
}
let p1Data = {
  name: "bob",
  surname: "Smith",
  idCode: 32432344,
  age: "38",
  sex: "male",
};
const p1 = new Person(p1Data);
class Workoholic extends Person {
  #hourlyPay;
  constructor(personProps, hourlyPay) {
    super(personProps);
    this.#hourlyPay = hourlyPay;
  }
}
const w1 = new Workoholic(
  {
    name: "bob",
    surname: "Smith",
    idCode: 32432344,
    age: "38",
    sex: "male",
  },
  10
);

// 2 Sukuriam klase Worker kuri paveldi klase Person
// prideti konstruktoriuje papildomas savybes
// privati HOURSCOUNT kuri bus lygi nuliu;
// savybe privati hourlyPay;
// prideti metoda workHours(10)
// parametru pasiima kiek val isdirba
// metodas calcPay() paskaiciuoja atlyginima su
// visa reikiama logika (paskaiciuojam atlyginima ir nunulinam valandas)

// 3 sukurti klase Partner()
// klase paveldi Person()
// sukurimo metu pridedam savybe projects kuri bus lygi tusciam
// masyvui
// tuscia metoda calcPay()
// metoda addProject()
// metodas pasitikrina ar projekas sukurtas pagal Projekto klase
// ir jei taip ikelia projekta i savo vietine savybe projects

// 4 Sukurti Klase Projects
// nieko nepaveldi
// sukurdami nauja Projekta uzpildysim savybes:
// title, price, bonus
// inicijuosim tuscia masyva projectJobs

// sukuriam metoda addAJobProject()
// prideda nauja darba i darbu masyva

//
