// map : used when we need to perform similar operation on all elements of array and need an array in return.
var arr = [1, 2, 3];
var modifiedArr = arr.map(function (element) {
    return element * 2;
});

console.log(modifiedArr, arr);
//-------------------------------

var arr2 = [true, false, true];
var modifiedArr2 = arr2.map(function (element) {
    return { checkedStatus: element };
});

console.log(modifiedArr2, arr2);
