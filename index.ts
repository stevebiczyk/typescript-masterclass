const STATUS_LOADING = "loading";
const STATUS_LOADED = "loaded";

STATUS_LOADING = "loaded"; // Error: Cannot assign to 'STATUS_LOADING' because it is a constant.

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
Direction.Left = 10; // Error: Cannot assign to 'Left' because it is a read-only property.

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction2.Right); // RIGHT

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}
type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const Person1: Person = {
  name: "John",
  email: "john@email.com",
  password: "pwd123",
  role: Roles.ADMIN,
};
