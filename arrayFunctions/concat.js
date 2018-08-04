var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr1, arr2, arr3);
//concatenates 2 arrays


//how to get a new array copy

var taskArr = [{checkedStatus : true, text : 'hey you'}, {checkedStatus : false, text : 'hi there'}];
// var newArr = taskArr; // copies array reference
var newArr = [].concat(taskArr); // makes new array;
