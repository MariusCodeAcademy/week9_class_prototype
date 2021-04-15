// Static properties

class Person {
  // private property kuri galima pasiekti tik is clases vidaus
  // experimentine savybe nenaudoti be babel kompiliavimo.
  #secretId = 555;
  // public field, pasiekiamas is visur
  neSecret = 333;
  // protected savybe(kol kas nera paprastai js) - galima pasiek is paveldinciu klasiu ir is esamos klases

  name = "Nezinomas";
  // statine savybe - nesimato sukurtame objekte. Ji yra Priskirti paciai Klasei.
  static group = "adults";
  static instanceCount = 0;
  constructor(vardas, amzius) {
    this.name = vardas;
    this.age = amzius;
    // kiekviena kartu sukurian instance of a class mes padidinam count vienetu
    Person.instanceCount++;
  }

  changeSecretId(num) {
    if (typeof num !== "number") return;
    // pasiekiama
    this.#secretId = num;
  }
}

const p1 = new Person("Jane", 44);
// pasiekti privacia savybe is issores
p1.neSecret = 111;
// p1.#secretId = 888;
p1.changeSecretId(888);
p1.changeSecretId("KAZKAS");

const p2 = new Person("Janet", 33);
p1.occupation = "Dev";
console.log(p1);

console.log("p1.group", p1.group);
// statines savybes pasiekiam su klase pavadinimu ir tada savybes pavadinimu
console.log("Person.group", Person.group);
console.log("Person.instanceCount", Person.instanceCount);

class Student extends Person {
  static instanceCount = 0;
  university = "ktu";

  constructor(vardas, amzius) {
    super(vardas, amzius);
    // kiekviena kartu sukurian instance of a class mes padidinam count vienetu
    Student.instanceCount++;
  }
}

const s1 = new Student("bob", 18);

console.log("s1", s1);

console.log("Student.group", Student.group);
console.log("Student.instanceCount", Student.instanceCount);
console.log("Person.instanceCount", Person.instanceCount);
