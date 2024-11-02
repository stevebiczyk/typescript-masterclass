type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
let DateOrUndefined: Date | undefined = new Date();

let myVar: StringOrNumber = 53421;

function print(input: string | undefined) {
  if (input) {
    console.log(input);
  } else {
    console.log("Please provide an input to print");
  }
}
