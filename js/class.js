"use strict";
console.log("Classes");
// sukuriam klase kazkuo panasu i brezini
class Person {
  // construktoriaus metodas vygdomas kiekviena karta mums
  //sukuriant objekta pagal klase new Person()
  constructor(argName, argAge, argGender, argWorkingStatus) {
    // dazniausiai konstruktoriuje inicijuojam pradines reiksmes ar veiksmus
    this.name = argName;
    this.age = argAge;
    this.gender = argGender;
    this.working = argWorkingStatus;
  }
  // klases metodas
  getNameAndAge() {
    console.log(`Name is ${this.name}. And ${this.age} years old`);
  }
}
let per1 = new Person("Bob", 23, "male", true);
let per2 = new Person("James", 43, "male", true);
console.log("per1", per1);
console.log("per2", per2);
per2.getNameAndAge();
// console.log("per1.name", per1.name);
let objArr = [per1];
objArr.push(per2);
console.log("objArr", objArr);

// per1.getNameAndAge();

let person1 = {
  name: "Bob",
  age: 23,
  gender: "male",
  working: true,
  // objekto metodas
  fun1: function () {
    console.log("Hello");
  },
};
let person2 = {
  name: "James",
  age: 30,
  gender: "male",
  working: false,
  // objekto metodas
  fun1: function () {
    console.log("Hello");
  },
};
let person3 = {
  name: "Jane",
  age: 34,
  gender: "female",
  working: true,
  // objekto metodas
  fun1: function () {
    console.log("Hello");
  },
};

// person1.fun1();
// funkcija
function getNameAndAge(name, age) {
  console.log(`Name is ${name}. And ${age} years old`);
}

// getNameAndAge(person1.name, person1.age);
// getNameAndAge(person2.name, person2.age);
// getNameAndAge(person3.name, person3.age);

console.clear();
let obj1 = {
  name: "blob",
  fn1: function () {
    // this esantis objekto viduje rodo i pati objekta
    console.log(this);
    console.log(obj1);
  },
};
// this nesantis objekte ar funkcijoje rodo i window objekta
// console.log(this);
