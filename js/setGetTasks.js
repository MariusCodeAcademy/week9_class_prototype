"use strict";

console.log("setGetTasks.js");

/*
https://edabit.com/challenge/2FF7RKw9RLwc3EBY9
    Uždavinio tikslas:
      Sudaryti edabit sistemos patirties taškų rinkimo atliekant užduotis simuliaciją.
    
    Eiga:
      1.  Sukurti klasė Challenge su savybėmis:
            - id: Number
            - level: String : "VE" | "EA" | "ME" | "HA" | "VH" | "EX" 
  
          inkapsuliuoti savybes:
            Sukurti šių savybių privačias savybes ir sukurti atitinkamus 'set'erius ir get'erius
              1.1 Padaryti, jog po objekto sukūrimo nebūtų galima pakeisti id.
              1.2 Padaryti, jog savybė level galėtų turėti tik vieną iš 6 reikšmių (žr. 13 eilutę)
  */

class Challenge {
  // static availableLevels = ["VE", "EA", "ME", "HA", "VH", "EX"];
  // Dry - dont repeat yourself
  // availableLevels === Object.keys(levelToPoints)
  static levelToPoints = {
    VE: 5,
    EA: 10,
    ME: 20,
    HA: 40,
    VH: 80,
    EX: 120,
  };
  #id;
  #level;
  constructor(chId, chLevel) {
    // setter in use
    this.id = chId;
    this.level = chLevel.toUpperCase();
  }
  set id(val) {
    // neleisti pakeisti id jei jau nustatytas
    if (this.#id === undefined) {
      this.#id = val;
    } else throw new Error("reiksmes pakeisti negalima");
  }
  get id() {
    return this.#id;
  }
  set level(levelVal) {
    if (Object.keys(Challenge.levelToPoints).includes(levelVal)) {
      this.#level = levelVal;
    } else throw new Error("This level is not valid");
  }
  get level() {
    return this.#level;
  }

  /*
        2. Sukurti get'erį Challenge klasėje points
          Metodas turi grąžinti XP (patirties taškų) kiekį priklausomai nuo lygio tipo:
              * "VE" = 5 XP
              * "EA" = 10 XP
              * "ME" = 20 XP
              * "HA" = 40 XP
              * "VH" = 80 XP
              * "EX" = 120 XP
    */
  get points() {
    return Challenge.levelToPoints[this.level];
  }
}

let c1 = new Challenge(1, "ve");
let c2 = new Challenge(2, "EA");
let c3 = new Challenge(3, "ME");
let c4 = new Challenge(4, "HA");
let c5 = new Challenge(5, "VH");
let c6 = new Challenge(6, "EX");
// console.log("c1", c1);

/*
      3. Sukurti klasę User su savybėmis:
        - name: String
        - xp: Number
        - log: Array
        
        inkapsuliuoti savybes
          Sukurti šių savybių privačias savybes ir sukurti atitinkamus 'set'erius ir get'erius
          3.1 name gali būti tik String reikšmė nuo 2 iki 16 simbolių
          3.2 xp savybei sukurti tik get'erį, 
          3.3 log savybės get'eris turi grąžinti masyvo kopiją, set'erio nedaryti
  */
class User {
  #name;
  #xp;
  #log;
  constructor(argName) {
    this.name = argName;
    this.#xp = 0;
    this.#log = [];
  }

  set name(val) {
    // pasitikrinti ar reiksme yra string tipo ir ar dydis yra nuo 2 iki 16
    if (typeof val !== "string") throw new Error("Name must be string");
    if (val.length < 2) throw new Error("Name must be more than 2 characters");
    if (val.length > 16) throw new Error("Name must be less than 16 characters");
    this.#name = val;
  }
  get name() {
    return this.#name;
  }
  get xp() {
    return this.#xp;
  }
  get log() {
    return [...this.#log];
  }
  // 4
  newSolvedChallenge(chalObj) {
    // pasitikrinti ar gautas obj sukurtas pagal Challenge klase
    if (chalObj instanceof Challenge) {
      let currChallegePoints = chalObj.points;
      this.#xp += currChallegePoints;
      this.#log.push(chalObj.id);
      return;
    }
    throw new Error("Challenge is not valid");
  }
}
const u1 = new User("James Bond");
const u2 = new User("Jane Doe");

// paduoti spresti pirmus 2 challegus Jamesui
u1.newSolvedChallenge(c1);
u1.newSolvedChallenge(c2);
// u1.newSolvedChallenge({ name: "blue" });

// paduoti Janei isspresti 3 ir 4 issukius
u2.newSolvedChallenge(c3);
u2.newSolvedChallenge(c4);

console.log("u1", u1);
console.log("u2", u2);

/*
        4. Sukurti naują metodą User klasėje newSolvedChallenge():
          4.1 Šis metodas turi per parametrą priimti Challenge klasės objektą - padaryti patikrą su 'instanceof'
          4.2 Padidinti privačią xp savybę tokiu dydžiu, kokį grąžins Challenge klasės objekto get'eris points
          4.3 Įdėti į privatų log masyvą pridedamo Challenge objekto id
    */

/*
      5. Sukurti klasės objektus testams pagal pavyzdį užduoties aprašyme
  */
