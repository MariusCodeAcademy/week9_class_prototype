"use strict";
console.log("inheritance - paveldimumas");

class User {
  constructor(vardas, amzius) {
    this.name = vardas;
    this.age = amzius;
  }
  greet() {
    console.log(`Sveiki mano vardas yra ${this.name} man yra ${this.age} metai`);
  }
  addPost() {
    console.log(`User ${this.name} sukure posta`);
  }
}

const u1 = new User("Jone", 23);
const u2 = new User("Bob", 43);
const u3 = new User("Kevin", 33);
u1.greet();
u1.addPost();
u2.addPost();
// u2.addUser("aa", 32);

// sukurti masyva vartotoju
let users = [new User("Jone", 23), new User("Bob", 43), new User("Kevin", 33)];
console.log("users", users);

// kevin say hi
users[2].greet();

// sukurkim administratoriaus useri kuri galetu istrinti arba prideti userius
// admin turetu praplesti ir paveldeti visas User klases savybe ir metodus

class Admin extends User {
  // norim kad admin turetu pavarde
  constructor(vardas, pavarde, amzius) {
    // is vaikines klases kreipiames i tevine klase su spec zodeliu super()
    // super() -> yra tevines klases construct()
    super(vardas, amzius);
    this.lname = pavarde;
  }
  addUser(vardas, amzius) {
    console.log("Adding user");
    users.push(new User(vardas, amzius));
  }
  deleteUser(userObjToDelete) {
    console.log("user to delete", userObjToDelete);
    let deleteIndex = users.indexOf(userObjToDelete);
    console.log("deleteIndex", deleteIndex);
    // users.splice(deleteIndex, 1);
    // istrynimas su filter
    // filtruoti ir grazinti viska isskyrus ta kuri mes norim istrinti
    users = users.filter((userObj) => userObj !== userObjToDelete);

    console.log(`admin ${this.name} delete user ${userObjToDelete.name}`);
  }
  // overriding a method in parent class
  // mes galim perrasyti tevines klases metodus jei to reikia
  greet() {
    console.log(`Sveiki as ${this.name} ${this.lname} ir esu administratorius`);
  }
}
// adm1 yra instance of Admin class
// adm1 yra objekas sukurtas paga aprasyta Admin klase
const adm1 = new Admin("Mikael", "Doe", 27);
adm1.greet();
adm1.addUser("Janet", 34);

adm1.deleteUser(users[1]); // delete BOB
console.log("adm1", adm1);
console.log("users po", users);
