// 1. Create an array of numbers that only accepts numbers.

let numberArray: number[] = [1, 2, 3, 4, 5];

// 2. Create an array of strings that only accepts strings.

let stringArray: string[] = ["Hello", "World"];
// 3. Create the tiple Person that only accepts a string (name) and a number (age).

let person: [string, number] = ["John", 30];

// 4. Create the readonly array Colors that only accepts strings, and the readonly tuple point that holds two numbers (x, y).

const colors: readonly string[] = ["Red", "Blue", "Green"];
const point: readonly [number, number] = [10, 20];

// 5. Create an Enum called StatusEnum that has the following values: Active, Inactive, Pending.
enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

// 6. Create an object as const called Status that has the same structure as StatusEnum.

const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;
