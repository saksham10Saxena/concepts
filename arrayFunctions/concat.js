var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr4 = arr1.concat(arr2);
console.log(arr1, arr2, arr4);
//concatenates 2 arrays


//how to get a new array copy

var taskArr = [{checkedStatus : true, text : 'hey you'}, {checkedStatus : false, text : 'hi there'}];
// var newArr = taskArr; // copies array reference
var newArr = [].concat(taskArr); // makes new array;

/// Concat more than two arrays
var arr3 = [7, 8, 9];
var arr5 = arr1.concat(arr2, arr3);
console.log(arr5);
///

//The following code concatenates nested arrays and demonstrates retention of references:
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]