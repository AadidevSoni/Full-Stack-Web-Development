interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
      console.log("Car is Starting");
  }
  stop(): void {
      console.log("Car is Stoping");
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();