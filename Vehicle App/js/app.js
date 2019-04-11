const e34 = new Car("BMW", "E34", 1995, "1600kg");
const e39 = new Car("BMW", "E39", 2001, "1675kg");
const civic = new Car("HONDA", "CIVIC", 2008, "1300kg");

console.log(`${e34.model} is ready to go on trip`);
console.log(`${e39.model} is ready to go on trip`);
console.log(`${civic.model} is ready to go on trip`);
console.log(
  "========================================================================================================================="
);
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    e34.driving();
    e39.driving();
    civic.driving();

    if (e34.tripsSinceMaintenace == 100) {
      e34.repair();
    }

    if (e39.tripsSinceMaintenace == 100 || civic.tripsSinceMaintenace == 100) {
      e39.repair();
      civic.repair();
    }

    e34.stop();
    civic.stop();
    e39.stop();
  }, 100);
}
