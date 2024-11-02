type check = any extends unknown ? true : false; // true
type check2 = string extends any ? true : false; // true
type check3 = null extends any ? true : false; // true
type check4 = undefined extends void ? true : false; // true
type check5 = [] extends Object ? true : false; // true
type check6 = Function extends Object ? true : false; // true

//a function declaration that never completes and returns a never type
const throwError = (errMessage: string) => {
  throw new Error(errMessage);
};

let strings: Object = ["a", "b", "c"];
let myFunction: Function = () => 2;
