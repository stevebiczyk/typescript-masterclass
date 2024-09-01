const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
console.log(safeIntPlusOne);

const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusTwo);

let bigInt1: bigint = BigInt(1234);
let bigInt2: bigint = BigInt(123456789n);
console.log(bigInt1);

let c: bigint = bigInt1 - bigInt2;
console.log(c);

let d: bigint = 12345.6789n;

let e: bigint = Math.log(bigInt1);