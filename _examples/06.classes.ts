class Vehicle {
  public move(distanceInMeters = 0) {
    console.log(`Vehicle moved ${distanceInMeters}m.`);
  }
}

class Plane extends Vehicle {
  private fly() {
    console.log('fly');
  }

  public run() {
    console.log('Broom!');
  }
}

const plane = new Plane();
plane.run();
plane.move(10);
plane.run();
// plane.fly();
