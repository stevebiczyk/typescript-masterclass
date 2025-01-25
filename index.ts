let number: readonly number[] = [1, 2, 3];

number.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

type ReadOnlyTuple = readonly [string, string, number];

let person: ReadOnlyTuple = ["John", "Doe", 30];
person[0] = "Jane"; // Error: Index signature in type 'readonly ["John", "Doe", 30]' only permits reading.

type a = Readonly<(string | number)[]>;
type b = ReadonlyArray<string | number>;

type c = Readonly<[number, string, number]>;
