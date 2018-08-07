var beasts = ['ant', 'bison', 'camal', 'duck', 'bison'];
console.log(beasts.indexOf('camal'));

console.log(beasts.indexOf('camal', 2)); //Ask this line, shows the expected output = 4 and started from index = 2.

console.log(beasts.indexOf('giraffe'));

var array = [2, 4, 9, 9, 7];
console.log(array.indexOf(4, -1));
// console.log(array.indexOf(2));
// console.log(array.indexOf(3));
// console.log(array.indexOf(4, 2));
// console.log(array.indexOf(9, 2));


//tells the index of occurrences of an element
//Ask this code of indices
var indices = [];  
var array = ['a', 'b', 'c', 'a', 'a', 'd', 'a'];
var element = 'a';
var idx = array.indexOf(element);
while(idx != -1){
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log('the position of a in the array is :',(indices));

//See the polyfill