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
}

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

/*
        4. Sukurti naują metodą User klasėje newSolvedChallenge():
          4.1 Šis metodas turi per parametrą priimti Challenge klasės objektą - padaryti patikrą su 'instanceof'
          4.2 Padidinti privačią xp savybę tokiu dydžiu, kokį grąžins Challenge klasės objekto get'eris points
          4.3 Įdėti į privatų log masyvą pridedamo Challenge objekto id
    */

/*
      5. Sukurti klasės objektus testams pagal pavyzdį užduoties aprašyme
  */
