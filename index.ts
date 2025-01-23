let person: [string, string, number] = ["John", "Doe", 30];

type User = [string, string, number, string?];
let user: User = ["John", "Doe", 30, "user@email.com"];

type listOfStudents = [number, boolean, ...string[]];

const mathStudents: listOfStudents = [1, true, "John", "Doe", "Jane", "Doe"];

type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

let stringBooleansNumber: StringBooleansNumber = ["John", true, false, 30];

let booleansStringNumber: BooleansStringNumber = [true, false, "John", 30];
