// named function
function intro(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

//function expression
const intro2 = function (name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

// arrow function
const intro3 = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

// const intro4 = (name: string, age: number): number => {
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// };
//* Error: Type 'string' is not assignable to type 'number'.
