var fruits = ['apple','mango','banana','orange','cherry','pineapple'];
console.log(fruits.slice(2));
console.log(fruits.slice(2,5));
console.log(fruits.slice(2,4));
console.log(fruits.slice(2,3));
var citrous = fruits.slice(1,3);
console.log(citrous);

var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3);
console.log(list1);