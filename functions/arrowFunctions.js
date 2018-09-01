/*function declaration is not allowed in arrow functions

incorrect syntax
() => {

}
*/


//this is allowed;  function expression
var x = () => {
    console.log('hello');
};

//to pass parameters in arrow fns
var sum = (a, b) => {
    return a + b;
};

//shortcut return syntax 
// when you don't write return and dont have { } around fn body
var sum1 = (a, b) => a + b;


//when you have to pass only one parameter
var square = a => a * a;
