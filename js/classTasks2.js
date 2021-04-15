"use strict";
console.log("class tasks 2");

// 1. Sukurti klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina
class Automobilis {
  constructor(gamintojas, modelioPav, kiekKainuoja) {
    this.marke = gamintojas;
    this.modelis = modelioPav;
    this.kaina = kiekKainuoja;
  }
}

let a1 = new Automobilis("BMW", "330", 2000);
a1.padidintiKaina(); // kaina 2100
a1.padidintiKaina(); // kaina 2200
console.log("a1", a1);

// 2. Sukurkite 4 skirtingus automobilius pagal klasę Automobilis kintamuosiuose arba masyve:
let automobiliai = [
  new Automobilis("BMW", "330", 2000),
  new Automobilis("Audi", "A8", 3350),
  new Automobilis("Opel", "Vectra", 1050),
  new Automobilis("MB", "600", 5000),
];

// 3. Atsispausdinkite car1, car2, car3, car4 kintamuosius.
// Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
console.log(automobiliai);

// 4 sukurti metoda info kuri grazina koks tai yra automobilis string pavidalu pvz "automobilis BMW 3, kaina 4000"

// 5. atspausdinti visu automobiliu modelius

// 6. atspausdinti visu automobiliu markes

// 7. atspausdinti visu automobiliu kainas

// 8. Sukurti metoda padidinti automobilio kainai 100;
// 8.1 padidinkite pirmo automobilio kaina 300
// 8.2 padidinkite paskutinio automobilio kaina 500

// 9. Sukurkite metoda nustatyti kaina ivedus skaiciu.
// pasitikrinkite ar bandomas ivesti yra skaicius ar ne .
// jei bandomas ivesti nes skaicius praneskite su klaidos pranesimu

// 10 Pridekite Autotomobilio klasei skaitliuka kuris skaiciuoja kiek automobiliu turite sukure

// 11 Sugeneruokite randomId kiekvienam sukurtam automobiliui sukurimo metu ir pridekite kaip savybe

// 12 Sukurkite klase AutoParduotuve
// sukurimo metu sukurkite savybe parduodamiAutomobiliai tuscia masyva

// 13 pridekite AutoParduotuvei metoda itrauktiAutomobili() kuris priima automobili sukurta pagal
// Automobilis klase ir prideda ji prie savo parduodamiAutomobiliai masyvo

// 14 Pridekite AutoParduotuves klasei savybe balansas ir prilyginkite ja 0
// pridekite metoda priktiAutomobili(id) kuris priima id automobilio kuri nori pirkti
// nupirkimo metu pinigai uz automobili keliauja i balansa o automobilis pasalinamas is parduodamiAutomobiliai masyvo.

// 15 Sukurti klase Saskaita
// saskaita priima Automobilis objekta ir kliento varda ir pavarde
// igyvendinti kad kiekviena nauja saskaita turetu didejanti skaiciu nuo 1
// prideti metoda israsytiPirkimoSaskaita() kuri grazina
// Pirkimo saskaita Nr 1
// siandieno data
// perkamo automobilio info
// prikejo varda pavarde
// aciu kad pirkote
