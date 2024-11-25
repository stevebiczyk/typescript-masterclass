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
  },
};
