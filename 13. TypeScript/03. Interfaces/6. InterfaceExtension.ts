interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

const myCar1: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  },
};

console.log(myCar1);