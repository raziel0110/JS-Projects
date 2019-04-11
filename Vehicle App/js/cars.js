class Car extends Vehicle {
  constructor(make, model, year, weight) {
    super(make, model, year, weight);
    this.isDriving = false;
  }
  driving() {
    this.isDriving = true;
  }

  stop() {
    this.isDriving = false;
    this.tripsSinceMaintenace++;
    console.log(
      `This ${this.model} is trip with number ${this.tripsSinceMaintenace}`
    );
    if (this.tripsSinceMaintenace === 99) {
      console.log(`${this.model} needs maintenace!`);
    }
  }

  repair() {
    this.needsMaintenance = false;
    console.log(`${this.model} was repaired!`);
  }
}
