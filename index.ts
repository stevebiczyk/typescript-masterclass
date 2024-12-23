let a: number[] = [1, 2, 3, 4, 5];
let b: Array<string> = ["a", "b", "c", "d", "e"];
let c: (string | number | boolean)[] = ["a", 1, "b", 2, "c", 3, true, false];

type Pilot = {
  name: string;
  licenseNumber: string;
  age: number;
};

type Seats = {
  [keyof: string]: string;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  pilot: Pilot;
  seats: Seats;
};

let airplane: Airplane = {
  model: "Boeing 747",
  flightNumber: "JH-123",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  pilot: {
    name: "John Doe",
    licenseNumber: "1234",
    age: 45,
  },
  seats: {
    "1A": "John Doe",
    "1B": "Jane Doe",
    "1C": "Sam Doe",
  },
};
