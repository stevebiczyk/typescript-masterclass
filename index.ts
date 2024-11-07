let city = "New York"; // string
let population = 8_500_000; // number
const age = 30; // number
let oldAge = 79 as const; // 79
let newAge = oldAge; //79
let data = new Map(); // Map<any, any>
let scores = [1, 2, 3]; // number[]
type Primitive = string | number | boolean; // string | number | boolean
type CustomName = "John" extends string ? string : "John"; //string
type CustomAge = typeof newAge extends number ? 79 : number; //79
type CheckData = typeof data extends Object ? true : false; //true
type CheckScores = typeof scores extends never ? {} : []; //[]

/**
 * Are the following statements valid?
 */

// age = 85;
// scores.push(8);
// scores.push("New score");
// let cudtomAge = (CustomAge = 46);
// let primitive: Primitive = new Date();
// let years: CheckScores = [];
