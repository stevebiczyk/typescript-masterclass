// Date;
// Array;
// Map;
// Set;
// Promise;
// RegExp;
// Error;
// Function;
// Symbol;
// WeakMap;
// WeakSet;

type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;
//annotation
let firstName: CustomString = "Istvan";
let age: CustomNumber = 46;
let birthday: CustomDate = new Date();
let unique: CustomSymbol = Symbol("symbol");

function addNumbers(a: number, b: number) {
  return a + b;
}
//inference
let finalResult = addNumbers(10, 15);
