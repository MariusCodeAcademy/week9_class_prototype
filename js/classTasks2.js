"use strict";
console.log("class tasks 2");

// 1. Sukurti klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina
class Automobilis {
  static autoSkaicius = 0;
  constructor(gamintojas, modelioPav, kiekKainuoja) {
    // this.id = this.generuotiId();
    this.id = "auto_" + (Automobilis.autoSkaicius + 1);
    this.marke = gamintojas;
    this.modelis = modelioPav;
    this.kaina = kiekKainuoja;
    Automobilis.autoSkaicius++;
  }
  // info metodas
  autoInfo() {
    return `Automobilis ${this.marke} ${this.modelis} kainuja ${this.kaina} Eur`;
  }
  // add 100
  padidintiSimtu() {
    let padidintaKaina = this.kaina + 100;
    this.kaina = padidintaKaina;
    // this.kaina += 100;
    // grazinant pati objekta mes galim jungti metodus i grandine (chain methods)
    return this;
  }
  // nustatytiKaina
  nustatytiKaina(naujaKaina) {
    if (typeof naujaKaina === "number" && naujaKaina > 0 && !isNaN(naujaKaina)) {
      this.kaina = naujaKaina;
    } else {
      //   console.warn("kaina privalo buti skaicius");
      throw new Error("kaina privalo buti skaicius ir daugiau uz nuli");
    }
  }
  // sugeneruoti random id
  generuotiId() {
    return "auto_" + Math.ceil(Math.random() * (100000 - 0) + 0);
  }
}

let a1 = new Automobilis("BMW", "330", 2000);
// a1.padidintiKaina(); // kaina 2100
// a1.padidintiKaina(); // kaina 2200
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
// a1.makePrice(11000)

// 4 sukurti metoda info kuri grazina koks tai yra automobilis string pavidalu pvz "automobilis BMW 3, kaina 4000"
// let a1info = automobiliai[2].autoInfo();
// console.log("a1info", a1info);

// 5. atspausdinti visu automobiliu modelius
// console.log(automobiliai[0].modelis);
// console.log(automobiliai[1].modelis);
// console.log(automobiliai[2].modelis);
// console.log(automobiliai[3].modelis);

// automobiliai.forEach((auto) => console.log(auto.modelis));
// 6. atspausdinti visu automobiliu markes
// automobiliai.forEach((auto) => console.log(auto.marke));
// 7. atspausdinti visu automobiliu kainas
// automobiliai.forEach((auto) => console.log(auto.kaina));

// 8. Sukurti metoda padidinti automobilio kainai 100;
// 8.1 padidinkite pirmo automobilio kaina 300
// 8.2 padidinkite paskutinio automobilio kaina 500
a1.padidintiSimtu();
console.log("a1", a1);
// console.clear();
// jei return this tai galim chain
automobiliai[0].padidintiSimtu().padidintiSimtu().padidintiSimtu();
// console.log("automobiliai[0].padidintiSimtu()", automobiliai[0].padidintiSimtu());

automobiliai[0].padidintiSimtu();

// automobiliai[0].padidintiSimtu();

automobiliai[3].padidintiSimtu().padidintiSimtu().padidintiSimtu().padidintiSimtu().padidintiSimtu();

// 9. Sukurkite metoda nustatyti kaina ivedus skaiciu.
// pasitikrinkite ar bandomas ivesti yra skaicius ar ne .
// jei bandomas ivesti nes skaicius praneskite su klaidos pranesimu
a1.nustatytiKaina(9000);
// a1.nustatytiKaina(-300);
// a1.nustatytiKaina("vienas");

// 10 Pridekite Autotomobilio klasei skaitliuka kuris skaiciuoja kiek automobiliu turite sukure
console.log("Sukurta autmobiliu", Automobilis.autoSkaicius);

// 11 Sugeneruokite randomId kiekvienam sukurtam automobiliui sukurimo metu ir pridekite kaip savybe

// 12 Sukurkite klase AutoParduotuve
// sukurimo metu sukurkite savybe parduodamiAutomobiliai tuscia masyva
// ir priima pavadinma argumentu new AutoParduotuve('bestCars')
class AutoParduotuve {
  // field - laukas
  balansas = 0;
  constructor(pavad) {
    // property - savybe
    this.parduodamiAutomobiliai = [];
    this.parduotuvesPavadinimas = pavad;
  }
  itrauktiAutomobili(autoObj) {
    // nepriimti obj jei jie nesukurti pagal Automobilis klase
    if (autoObj instanceof Automobilis) {
      // console.log("<<sukurtas teisingai ========>>");
      this.parduodamiAutomobiliai.push(autoObj);
      return;
    }
    console.warn("Netinkamas objektas========= >>");
    // console.log("this.parduodamiAutomobiliai", this.parduodamiAutomobiliai);
  }
  priktiAutomobili(autoId) {
    // surasti auto pagal id
    // paimti pinigu suma kiek jis kainuoja ir prideti prie balanso
    // pasalinti automobili is parduodamiAutomobiliai
  }
}
let a2 = {
  kaina: 9000,
  marke: "BMW",
  modelis: "330",
};
console.clear();
let shop1 = new AutoParduotuve("Best Cars Ever");
console.log("shop1", shop1);
shop1.itrauktiAutomobili(a1);
shop1.itrauktiAutomobili(automobiliai[1]);
// shop1.itrauktiAutomobili(a2);
shop1.priktiAutomobili(123);

// 13 pridekite AutoParduotuvei metoda itrauktiAutomobili() kuris priima automobili sukurta pagal
// Automobilis klase ir prideda ji prie savo parduodamiAutomobiliai masyvo
// patikrinti ar gautas objektas sukurta paga Automobilio klase. instanceof
// toks netureti buti tinkamas itraukti

// 14 Pridekite AutoParduotuves klasei savybe balansas ir prilyginkite ja 0
// pridekite metoda priktiAutomobili(id) kuris priima id automobilio kuri nori pirkti
// nupirkimo metu pinigai uz automobili keliauja i balansa o automobilis pasalinamas
// is parduodamiAutomobiliai masyvo.

// 15 Sukurti klase Saskaita
// saskaita priima AutoParduotuves obj Automobilis objekta ir kliento varda ir pavarde
// igyvendinti kad kiekviena nauja saskaita turetu didejanti skaiciu nuo 1
// prideti metoda israsytiPirkimoSaskaita() kuri grazina
// Pirkimo saskaita Nr 1
// Parduotives pavadinmas
// siandieno data
// perkamo automobilio info
// prikejo varda pavarde
// aciu kad pirkote

// 16 sukurti 2 parduotuves ir sukelti automobilius i jas
// parduoti visus automobilius ir israsyti saskaitas

// 17 Sugeneruoti lentele
// pridekite dar bent 5 automobilius i viena is autoParduotuviu
// sukurkite klase GenerateHtml
// si klase tures statinius metodus
// 17.1 generuotiSarasa - paima turimus automobilius parduotuveje ir grazina
// html rikiuoto saraso pavidalu automobiliu info
// GenerateHtml.generuotiSarasa(parduodamiAutomobiliai);
// 17.2 generateTable() - paima parduotuves objekta ir sugeneruoja html lenteles teksta
// GenerateHtml.generateTable(shop1);
