let id: symbol = Symbol(1234);
let abcId: symbol = Symbol("abc");

let user = {
  [id]: "1234",
  name: "John",
  getId() {
    return this[id];
  },
};

console.log(user.name);

console.log(id);
console.log(user.getId());
