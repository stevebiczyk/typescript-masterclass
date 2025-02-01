enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

let eDirection = EDirection.Up;
let direction = Direction.Right;
ODirection.Right = "newvalue"; // Error: Cannot assign to 'Right' because it is a read-only property.
