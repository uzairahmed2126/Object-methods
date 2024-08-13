let a = { a: "hey" };
let b = { b: "hello" };
console.log(a);
let newValue = Object.assign(b, a);
newValue.a = 1;
b.b = {};
console.log(newValue);
let data = { a: "a", b: "b", c: "c" };
console.log(Object.assign(data, { d: "d" },{},{}));
