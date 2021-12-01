function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function () {
        console.log("Hello World");
    }

    return 7;
}

let alien1 = new Alien("Raju", "JAVA");

console.log(alien1);

alien1.work()