enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite | Delete,
}

console.log(AccessPermissions.ReadWrite); // 3
console.log(AccessPermissions.All); // 7

enum ShapeKind {
  Circle = "circle",
  Square = "square",
}
// Circle = "circle" | Square = "square"

type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};

type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};

let circle: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
};

function printShape(shape: ShapeKind) {
  switch (shape.kind) {
    case ShapeKind.Circle:
      console.log("Circle", shape.radius);
      break;
    case ShapeKind.Square:
      console.log("Square", shape.sideLength);
      break;
  }
}
