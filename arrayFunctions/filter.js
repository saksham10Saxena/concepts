//used to filter out some values from array. returns an array.
var arr = [1,2,3,4,5,6,7,8,9];

var modifiedArr = arr.filter(function(element){
    //boolean
    if(element > 5){
        return true;
    }
    else{
        return false;
    }


    // return element > 5;
}); 

console.log(modifiedArr , arr);