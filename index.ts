type Dog = {
  name: string;
  barks: boolean;
  wagsTail: boolean;
};

type Cat = {
  name: string;
  meows: boolean;
  purrs: boolean;
};

type Animal = Dog | Cat;

let dog: Animal = {
  name: "Fido",
  barks: true,
  wagsTail: true,
};

let cat: Animal = {
  name: "Whiskers",
  meows: true,
  purrs: true,
};

let hybrid: Animal = {
  name: "Hybrid",
  barks: true,
  wagsTail: true,
  meows: true,
  purrs: true,
};

// Missing properties are not allowed in union types
