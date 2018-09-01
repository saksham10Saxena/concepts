var animals = ['push', 'goat', 'sheep'];
animals.push('elephant');
console.log('The animals names are -',animals);

var length = animals.push();
console.log(length);

var lengths = animals.push('dog', 'cat');
console.log('The New animal list is :',animals);
console.log(lengths);

//Join Two Array

var fruits = ['mango', 'apple', 'banana'];
var vegetable = ['potato', 'ladyfinger', 'cauliflower'];
Array.prototype.push.apply(fruits,vegetable);
console.log(fruits);