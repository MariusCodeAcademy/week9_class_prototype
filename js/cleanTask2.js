"use strict";
console.log("class tasks 2");

class Automobilis {
  static autoSkaicius = 0;
  constructor(gamintojas, modelioPav, kiekKainuoja) {
    this.id = "auto_" + (Automobilis.autoSkaicius + 1);
    this.marke = gamintojas;
    this.modelis = modelioPav;
    this.kaina = kiekKainuoja;
    Automobilis.autoSkaicius++;
  }
  autoInfo() {
    return `Automobilis ${this.marke} ${this.modelis} kainuja ${this.kaina} Eur`;
  }
  padidintiSimtu() {
    let padidintaKaina = this.kaina + 100;
    this.kaina = padidintaKaina;
    return this;
  }
  nustatytiKaina(naujaKaina) {
    if (typeof naujaKaina === "number" && naujaKaina > 0 && !isNaN(naujaKaina)) {
      this.kaina = naujaKaina;
    } else {
      throw new Error("kaina privalo buti skaicius ir daugiau uz nuli");
    }
  }
  generuotiId() {
    return "auto_" + Math.ceil(Math.random() * (100000 - 0) + 0);
  }
}

let a1 = new Automobilis("BMW", "330", 2000); //
console.log("a1", a1);

let automobiliai = [
  new Automobilis("BMW", "330", 2000),
  new Automobilis("Audi", "A8", 3350),
  new Automobilis("Opel", "Vectra", 1050),
  new Automobilis("MB", "600", 5000),
];

a1.padidintiSimtu();
console.log("a1", a1);
automobiliai[0].padidintiSimtu().padidintiSimtu().padidintiSimtu();
automobiliai[3].padidintiSimtu().padidintiSimtu().padidintiSimtu().padidintiSimtu().padidintiSimtu();

a1.nustatytiKaina(9000);
console.log("Sukurta autmobiliu", Automobilis.autoSkaicius);

class Saskaita {
  static sasCount = 1;
  constructor(parduotuvesPavadinimas, koksAutomobilis, klientoVardas, klientoPavarde) {
    this.autoParduotuve = parduotuvesPavadinimas;
    this.automobilis = koksAutomobilis;
    this.klientoVardas = klientoVardas;
    this.klientoPavarde = klientoPavarde;
  }
  israsytiPirkimoSaskaita() {
    return `
    Pirkimo pardavimo saskaita Nr ${this.saskaitosNr},
    Parduotuve: ${this.autoParduotuve},
    Prikimo data: ${this.saskaitosData},
    Perkamas Automobilis: ${this.automobilis.autoInfo()},
    Pirkejas: ${this.klientoVardas} ${this.klientoPavarde},
    Aciu kad pirkote.
    `;
  }
  get saskaitosData() {
    let now = new Date();
    return now.toLocaleDateString();
  }
}

class AutoParduotuve {
  balansas = 0;
  constructor(pavad) {
    this.parduodamiAutomobiliai = [];
    this.parduotuvesPavadinimas = pavad;
  }
  itrauktiAutomobili(autoObj) {
    if (autoObj instanceof Automobilis) {
      this.parduodamiAutomobiliai.push(autoObj);
      return;
    }
    console.warn("Netinkamas objektas========= >>");
  }
  priktiAutomobili(autoId) {
    let rastasAuto = this.surastiAautomobili(autoId);
    if (!rastasAuto) {
      console.warn(autoId, "tokio auto nera");
      return;
    }
    this.balansas += rastasAuto.kaina;

    this.parduodamiAutomobiliai = this.parduodamiAutomobiliai.filter((pardAutoObj) => autoId !== pardAutoObj.id);

    return new Saskaita(this.parduotuvesPavadinimas, rastasAuto, "James", "Brown");
  }
  surastiAautomobili(autoId) {
    let suradauAuto = this.parduodamiAutomobiliai.find((autoObj) => autoId === autoObj.id);
    return suradauAuto;
  }
}

let a2 = {
  kaina: 9000,
  marke: "BMW",
  modelis: "330",
  inStock: true,
};

let shop1 = new AutoParduotuve("Best Cars Ever");
let shop2 = new AutoParduotuve("New cars");
console.log("shop1", shop1);

automobiliai.forEach((auto) => shop1.itrauktiAutomobili(auto));
console.log('shop1.priktiAutomobili("auto_3")', shop1.priktiAutomobili("auto_3"));
console.log('shop1.priktiAutomobili("auto_4")', shop1.priktiAutomobili("auto_4"));
