var x = { a: 23, b: 124 };
var y = { c: 34, d: 3 };
var z = { p: 23, q: 'sds' };
Object.assign(x, y, z);
console.log(x, y, z);

//similar array concat

//how to get a new object copy
var a = { h: 'asdsd', i: 'dsdsd' };
// var b= a; //copies reference of object
var b = Object.assign({}, a);
