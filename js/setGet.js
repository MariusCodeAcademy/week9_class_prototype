"use strict";
console.log("setter getter");

class User {
  #password = "secret";
  constructor(userName, pass) {
    // sukuriam savybes key su _ zymedami kad tai turetu buti privati savybe
    // arba tiesiog turim omeny kad jos tiesiogiai nekeisim
    this._userName = userName;
    this.#password = pass;
  }

  // setteris - nusako kaip mes irasysim verte
  set userName(val) {
    if (typeof val !== "string") return;
    this._userName = val;
  }
  // getteris - kaip mes nuskatysim verte
  get userName() {
    return this._userName;
  }

  // setteris slaptazodziui
  set password(val) {
    if (val.length <= 4) {
      throw new Error("Slaptazodis turetu buti daugiau nei 4 raides");
    }
    this.#password = val;
  }
  get password() {
    return this.#password;
  }

  // private = (function () {
  //   let secretPass = "4434";
  //   return {
  //     secID: "123",
  //   };
  // })();
}

let u1 = new User("James", "sss");

// pakeisti username
u1.userName = "John";

// nuskaityti usename
console.log("u1.userName", u1.userName);
// setter
u1.password = "sdsd";
// getteris
console.log("u1.password", u1.password);

console.log("u1", u1);

// IIFE
// (function blue() {
//   console.log("green");
// })();

// blue();
