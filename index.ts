type Cat = {
  name: string;
  alive: boolean;
  color: string;
};

type Dog = {
  name: string;
  dead: boolean;
  color: string;
};

type CatDog = Cat & Dog;

let catDog: CatDog = {
  name: "Fluffy",
  alive: true,
  dead: false,
  color: "black",
};
